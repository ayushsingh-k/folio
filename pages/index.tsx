import { METADATA } from '../constants'
import Head from 'next/head'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Menu from '@/components/menu'
import ProgressIndicator from '@/components/progress-indicator'

export default function Home() {
  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
      </Head>
      <Layout>
        <ProgressIndicator></ProgressIndicator>
        <Header>
          <Menu></Menu>
        </Header>
      </Layout>
    </>
  )
}
