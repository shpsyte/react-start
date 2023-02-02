import { FormEvent, useContext, useState } from 'react'

import { Button } from '@/components/button'
import { Input } from '@/components/form/Input'

import { AuthContext } from '@/contexts/auth/AuthContext'
import { wihtSSRGuest } from '@/utils/useSSRGuest'
export default function Home() {
  const { signIn, authError, isAuthenticating } = useContext(AuthContext)
  const [email, setEmail] = useState('vhadm@mailinator.com')
  const [password, setPassword] = useState('Admin@123')

  async function handleLogin(event: FormEvent) {
    event.preventDefault()

    const data = {
      email,
      password,
    }
    await signIn(data)
  }

  return (
    <div className="flex items-center justify-center container mt-5 max-w-4xl">
      <form onSubmit={handleLogin} className="w-full  flex flex-col gap-6">
        <Input.Root>
          <Input.Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="email"
          />
        </Input.Root>
        <Input.Root>
          <Input.Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="password"
            type="password"
          />
        </Input.Root>
        <Button type="submit" isLoading={isAuthenticating}>
          Login
        </Button>

        {authError && <p className="text-lg text-red-400">{authError}</p>}
      </form>
    </div>
  )
}

export const getServerSideProps = wihtSSRGuest(async (_ctx) => {
  return {
    props: {},
  }
})
