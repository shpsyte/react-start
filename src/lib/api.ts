import axios, { AxiosError, AxiosResponse } from 'axios'
import { verify } from 'jsonwebtoken'
import { parseCookies, setCookie } from 'nookies'

import { logger } from '@/lib/logger'

import { signOut } from '@/contexts/auth/AuthContext'
import { AppConsts, AuthConst } from '@/utils/const/'
import { BaseError, UnauthorizedError } from '@/utils/errors'

let isRefreshing = false
let failedQueue: any[] = []

function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx)

  type CustomError = {} & BaseError & AxiosError & { response: AxiosResponse }

  // create an axios instance
  const api = axios.create({
    baseURL: AppConsts.appApiUrl,
    headers: {
      Authorization: `Bearer ${cookies[AuthConst.accessTokenName]}`,
      responseType: 'arraybuffer',
      responseEncoding: 'binary',
    },
  })

  // https://github.com/axios/axios/issues/5298
  // until it solves
  if (ctx) {
    api.defaults.headers['Accept-Encoding'] = 'identity'
    logger.info('Accept-Encoding: identity', { ctx })
  }

  const isAccessTokenValidButExpired = (token: string): Boolean => {
    try {
      !!token &&
        verify(token, AuthConst.tokenSecret, {
          ignoreExpiration: true,
        })
      return true
    } catch (error) {
      return false
    }
  }
  // get it after sending a request
  api.interceptors.response.use(
    (response: AxiosResponse<any>) => response,
    ({ response }: { response: AxiosResponse<any> }) => {
      const {
        status,
        config,
        data: { error },
      } = response

      const {
        code = 0,
        details = 'Axios error',
        message = '',
        validationErrors = '',
      } = error || {}
      const _err = {
        status,
        code,
        details,
        message,
        validationErrors,
      } as CustomError

      // try to infer the token is expired
      cookies = parseCookies(ctx)
      const currentToken = cookies[AuthConst.accessTokenName]

      const isTokenValidButExpired = isAccessTokenValidButExpired(currentToken)
      // get the refreshToken
      const refreshToken = cookies[AuthConst.refreshTokenName]
      const isTokenExperied =
        isTokenValidButExpired &&
        message.toLowerCase() ===
          'current user did not login to the application!' &&
        refreshToken &&
        true

      if (status === 401) {
        // hight possibility that the token is expired

        if (isTokenExperied) {
          // get the original config to use it in the refresh token request
          const originalConfig = config

          // strategy to refresh the token
          if (!isRefreshing) {
            isRefreshing = true
            logger.info('Refresh-Token', { rt: currentToken })

            api
              .post(`/v1/auth/refreshtoken`, { refreshToken })
              .then((res) => {
                const { accessToken } = res.data?.result
                // set the new token
                api.defaults.headers.Authorization = `Bearer ${accessToken}`
                setCookie(ctx, AuthConst.accessTokenName, accessToken, {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: '/',
                })

                // set the new token to the failed queue
                failedQueue.forEach((request) => request.onSuccess(accessToken))
                failedQueue = []
              })
              .catch((err) => {
                failedQueue.forEach((request) => request.onFailure(err))
                failedQueue = []
                const e = new UnauthorizedError(_err)
                logger.error('Refresh-Token', e)

                if (typeof window !== 'undefined') {
                  signOut()
                } else {
                  return Promise.reject(e)
                }
              })
              .finally(() => {
                isRefreshing = false
              })
          }

          // return a promise to the failed request
          return new Promise((resolve, reject) => {
            // add the request to the failed queue
            // to retry it later
            failedQueue.push({
              onSuccess: (token: string) => {
                // update the originalConfig adding the new token
                if (originalConfig && originalConfig.headers) {
                  originalConfig.headers.Authorization = `Bearer ${token}`
                  resolve(api(originalConfig))
                } else {
                  reject(_err)
                }
              },
              onFailure: (err: AxiosError) => {
                reject(err)
              },
            })
          })
        } else {
          if (typeof window !== 'undefined') {
            signOut()
          } else {
            const e = new UnauthorizedError(_err)
            logger.error('Refresh-Token', e)
            return Promise.reject(e)
          }
        }
      }
      logger.error(_err, 'API-rest')
      return Promise.reject(_err)
    }
  )

  return api
}
// export function changeApiUrl(url: string) {
//   api.defaults.baseURL = url
// }

export const api = setupAPIClient()
export const apiWithCtx = (_ctx: any) => setupAPIClient(_ctx)
