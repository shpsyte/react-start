import type { AppProps } from 'next/app'

import '../styles/globals.css'

import { AuhtProvider } from '@/contexts/auth/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuhtProvider>
      <Component {...pageProps} />
    </AuhtProvider>
  )
}
