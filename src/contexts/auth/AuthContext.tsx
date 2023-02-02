/* eslint-disable no-console */
import Router from 'next/router'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from '@/lib/api'

import { AppConsts, AuthConst } from '@/utils/const/'

type SignInCredentials = {
  email: string
  password: string
}

type User = {
  id: string
  email: string
  position: string
  yearsOfExperience: number
  firstName: string
  lastName: string
  fullName: string
  isPremium: boolean
  isTech: boolean
  finishedOnboarding: boolean
  finishedLearningHubOnboarding: boolean
  inviteCode: string
  companyId: number
  companyName: string
  shouldChangePasswordOnNextLogin: boolean
  englishLevel: 3
  english: string
  roles: ['']
  permissions: ['']
  image: string
  redirectTo: ''
  profile: string
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
  isAuthenticated: boolean
  isAuthenticating: boolean
  authError: string
  user: User | Partial<User> | null
}
type AuthProviderProps = {
  children: ReactNode
}

const AUTH_ROUTE = '/v1/auth/Authenticate'
const ME_ROUTE = '/v2/Me'

export const AuthContext = createContext({} as AuthContextData)
let authChannel: BroadcastChannel

function destroyCookies() {
  destroyCookie(undefined, AuthConst.accessTokenName)
  destroyCookie(undefined, AuthConst.refreshTokenName)
  Router.push('/sign-in')
}

export const signOut = () => {
  destroyCookies()
  authChannel.postMessage({ type: 'signOut' })
}
export function AuhtProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<Partial<User | null>>(null)
  const [authError, setAuthError] = useState('')
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const isAuthenticated = !!user

  // broadcast channel
  useEffect(() => {
    authChannel = new BroadcastChannel('auth')
    authChannel.onmessage = (msg) => {
      switch (msg.data.type) {
        case 'signOut':
          destroyCookies()
          break
        default:
          break
      }
    }
  }, [])

  useEffect(() => {
    const cookies = parseCookies()
    const token = cookies[AuthConst.accessTokenName]
    if (token) {
      const fetchMe = async () => {
        const { data } = await api.get(ME_ROUTE)
        const { ...rest } = data.result
        const profile = `${AppConsts.appClientUrl}/${rest?.id}`
        setUser({ ...rest, profile })
      }
      fetchMe().catch(() => {
        signOut()
      })
    }
  }, [])

  const signIn = async ({ email, password }: SignInCredentials) => {
    setAuthError('')
    setIsAuthenticating(true)
    try {
      const response = await api.post(AUTH_ROUTE, {
        userNameOrEmailAddress: email,
        password,
      })
      const { accessToken, refreshToken } = response?.data?.result
      // update the authorization header
      api.defaults.headers.Authorization = `Bearer ${accessToken}`

      const responseMe = await api.get(ME_ROUTE)
      const { ...rest } = responseMe.data.result
      const profile = `${AppConsts.appClientUrl}/${rest?.id}`
      setUser({ ...rest, profile })

      setCookie(undefined, AuthConst.accessTokenName, accessToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      })
      setCookie(undefined, AuthConst.refreshTokenName, refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      })

      Router.push('/')
    } catch (error: any) {
      setAuthError(error?.details)
    } finally {
      setIsAuthenticating(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user,
        authError,
        signOut,
        isAuthenticating,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
