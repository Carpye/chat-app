import type { NextPage } from 'next'
import Head from 'next/head'
import RootLayout from '../components/RootLayout'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MessMe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootLayout page="home">
        App
      </RootLayout>
    </div>
  )
}

export default Home
