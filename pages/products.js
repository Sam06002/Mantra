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
        <SubHero img="https://mantra.ai/wp-content/themes/mantra_light_theme/images/increasing-sales.png" />
        <SecondaryProducts />
        <SubHero wave={true} img="https://www.mantra.ai/wp-content/uploads/2019/07/flowmagic-illustration-blu-1.png" />
        <h4 style={{textAlign: "center"}}>@A Spade Work Production</h4>
    </div>
  )
}