import { ReactElement } from 'react'
import Layout from '@/components/Layout'
import type { NextPageWithLayout } from '@/pages/_app'

const Home: NextPageWithLayout = () => {
  return <h1>hoge</h1>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
