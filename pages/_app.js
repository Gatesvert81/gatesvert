import { AnimateSharedLayout } from 'framer-motion'
import Context from '../Component/MainComponents/Context'
import Layout from '../Component/MainComponents/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <AnimateSharedLayout>
      <Context>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Context>
    </AnimateSharedLayout>
  )
}

export default MyApp
