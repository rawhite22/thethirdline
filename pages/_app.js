// next
import Head from 'next/head'
import { useRouter } from 'next/router'
// animations
import { AnimatePresence } from 'framer-motion'
// styles
import '../styles/globals.css'
// font awesome
import '@fortawesome/fontawesome-svg-core/styles.css' // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'
import Layout from '../layout'
import { useEffect } from 'react'
import { AppContextProvider } from '../context/AppContext'
import { FantasyScoringProvider } from '../context/FantasyScoringContext'
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
      <AppContextProvider>
        <Layout>
          <AnimatePresence mode='wait' initial={false}>
            <FantasyScoringProvider>
              <Component {...pageProps} key={router.route} />
            </FantasyScoringProvider>
          </AnimatePresence>
        </Layout>
      </AppContextProvider>
    </>
  )
}

export default MyApp
