import '../styles/app.css'
import '../styles/tailwind.css'
// import 'tw-elements';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
