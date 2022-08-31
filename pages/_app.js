// next
import Head from 'next/head'
// animations
import { AnimatePresence } from 'framer-motion'
// styles
import '../styles/globals.css'
// font awesome
import '@fortawesome/fontawesome-svg-core/styles.css' // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>The Third Line</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Fantasy hockey research tool to help you win your league and or dominate in daily fantasy'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta charSet='UTF-8' />
        <link rel='shortcut icon' type='image/png' href='/nhl.png' />
      </Head>
      <AnimatePresence mode='wait' initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
