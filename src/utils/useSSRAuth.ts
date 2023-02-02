import decode from 'jwt-decode'
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next'
import { destroyCookie, parseCookies } from 'nookies'

import { AuthConst } from './const'
import { UnauthorizedError } from './errors'
import { validateUserPemissions } from './validateUserPermissions'

type WithSSRAutthOptions = {
  permissions?: string[]
  roles?: string[]
}
export function withSSRAuth<T extends { [key: string]: any }>(
  fn: GetServerSideProps<T>,
  options?: WithSSRAutthOptions
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<T>> => {
    const cookies = parseCookies(ctx)
    const token = cookies[AuthConst.accessTokenName]

    if (options) {
      const user = decode<{ permissions: string[]; roles: string[] }>(token)
      const { permissions = [], roles = [] } = options

      const userHasValidPermissions = validateUserPemissions({
        user,
        permissions,
        roles,
      })

      if (!userHasValidPermissions) {
        return {
          notFound: true,
        }
      }
    }

    if (!token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      }
    }

    try {
      return await fn(ctx)
    } catch (err) {
      if (err instanceof UnauthorizedError) {
        destroyCookie(ctx, AuthConst.accessTokenName)
        destroyCookie(ctx, AuthConst.refreshTokenName)

        return {
          redirect: {
            destination: '/login',
            permanent: false,
          },
        }
      }
      // check this return
      return await fn(ctx)
    }
  }
}
