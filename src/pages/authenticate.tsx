import { useState } from 'react'

import { api, apiWithCtx } from '@/lib/api'
import { logger } from '@/lib/logger'

import { Button } from '@/components/button'

import { withSSRAuth } from '@/utils/useSSRAuth'

export default function Home({ user }: any) {
  const [data, setData] = useState(null)
  async function me() {
    try {
      setData(null)
      const resp = await api.get('/v2/Me')

      // logger.info(resp.data)
      setData({ ...resp.data?.result })
      // console.log('sucesso getting me ', resp?.data)
    } catch (error) {
      logger.error(error, 'erro no getting me ')
    }
    return true
  }
  return (
    <div className="flex flex-col items-center justify-center container mt-5 max-w-4xl">
      <h1>This is an authenticate page</h1>
      <Button type="button" onClick={me}>
        Getting me!
      </Button>
      <hr />
      {data && (
        <div className="bg-green-100 border border-green-400  px-4 py-3 rounded relative">
          <span className="block sm:inline">
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </span>
        </div>
      )}
      {user && (
        <div className="bg-green-100 border border-green-400  px-4 py-3 rounded relative">
          <span className="block sm:inline">
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </span>
        </div>
      )}
    </div>
  )
}

export const getServerSideProps = withSSRAuth<{}>(async (_ctx) => {
  try {
    const { data } = await apiWithCtx(_ctx).get('/v2/Me')
    return {
      props: {
        user: data?.result,
      },
    }
  } catch {
    // console.log('error', error)
  }
  return {
    props: {},
  }
})
