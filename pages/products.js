import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import NavBar from '../components/navBar'
import Hero from '../components/products/hero'
import SubHero from '../components/products/SubHero'
import SecondaryProducts from '../components/products/secondaryp'

export default function Home() {
  useEffect(() => {

  }, [])
  return (
    <div>
        <NavBar />
        <Hero />
        <SubHero />
        <SecondaryProducts />
        <h4 style={{textAlign: "center"}}>@A Spade Work Production</h4>
    </div>
  )
}