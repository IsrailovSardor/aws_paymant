import '../styles/globals.css'
import '../styles/Welcom.scss'
import '../styles/Profile.scss'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
