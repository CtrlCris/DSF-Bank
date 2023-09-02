import Experience from '@/Componets/Experience/Experience'
import Footer from '@/Componets/Footer/Footer'
import Header from '@/Componets/Header/Header'
import NavBar from '@/Componets/NavBar/NavBar'
import Resources from '@/Componets/Resources/Resources'
import Rewards from '@/Componets/Rewards/Rewards'
import Testimonials from '@/Componets/Testimonials/Testimonials'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>DSF Bank</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />       
      </Head>
      <NavBar/>
      <Header/>
      <main>
        <Experience/>
        <Resources/>
        <Rewards/>
        <Testimonials/>
      </main>
      <Footer/>
    </>
  );
}
