import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next'
import { parseCookies } from 'nookies'

import { AuthConst } from './const'

/// This function is used to redirect the user to the home page if he is already logged in
export function wihtSSRGuest<T extends { [key: string]: any }>(
  fn: GetServerSideProps<T>
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<T>> => {
    const cookies = parseCookies(ctx)
    if (cookies[AuthConst.accessTokenName]) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    return await fn(ctx)
  }
}
