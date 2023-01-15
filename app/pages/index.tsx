import type { NextPage } from 'next'
import RootLayout from '../components/RootLayout'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div>

      <RootLayout page="home">
        <main className='main relative -top-16'>
          <Hero />
        </main>
      </RootLayout>
    </div>
  )
}

export default Home
