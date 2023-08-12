import Image from 'next/image'
import HeroSection from '@/components/hero-section'
import Content from '@/components/content'
import Static from '@/components/static'
import Contact from '@/components/contact'
export default function Home() {
  return (
    <main>
     <HeroSection/>
     <Content/>
     <Static/>
     <Contact/>
    </main>
  )
}
