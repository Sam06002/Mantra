import 'bootstrap/dist/css/bootstrap.min.css'
import s from '../styles/home/home.module.css'
import Cards from '../components/index/cards'
import Clients from '../components/index/clients'
import { useEffect } from 'react'
import NavBar from '../components/navBar'

export default function Home() {
  useEffect(() => {
    const one = document.getElementById("one")
    const two = document.getElementById("two")
    const slideOne = document.getElementById("slideOne")
    const slideTwo = document.getElementById("slideTwo")
    const barOne = document.getElementsByClassName("bar")[0]
    const barTwo = document.getElementsByClassName("bar")[1]

    
    window.onmousemove = (e) => {
      const dance = document.getElementById("dancingText")
      const y = (window.innerHeight - e.clientY * 5) / 100
      const x = (window.innerWidth - e.clientX * 5) / 100
      dance.style.transform = `translateX(${x}px) translateY(${y}px)`
      console.log(x);
      console.log(dance);
      // console.log(e);
    }



    one.addEventListener("click", () => {
      slideTwo.classList.remove("active")
      slideOne.classList.add("active")
      // slideTwo.classList.add("fadeIn")
      slideOne.classList.add("fadeIn")
      barOne.classList.add("barActive")
      barTwo.classList.remove("barActive")
    })
    
    two.addEventListener("click", () => {
      slideOne.classList.remove("active")
      slideTwo.classList.add("active")
      slideTwo.classList.add("fadeIn")
      slideTwo.classList.add("fadeOut")
      barTwo.classList.add("barActive")
      barOne.classList.remove("barActive")
    })

  }, [])
  return (
    <div>
      <NavBar />

      <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">

        <ol className="carousel-indicators">
          <li id="one" data-target="#myCarousel" data-slide-to="0" className="active"><div className="bar barActive"></div></li>
          <li id="two" data-target="#myCarousel" data-slide-to="1"><div className="bar"></div></li>
        </ol>

        <div className="carousel-inner">


          <div id="slideOne" className="carousel-item active">
            <div className="container-md slide">
              <h1>How integrated is your AI Strategy with your Organization Goals</h1>
              <img id="img" src="https://mantra.ai/wp-content/themes/mantra_light_theme/images/carousel-3.png" />

            </div>
          </div>
          <div id="slideTwo" className="carousel-item">
            <div className="container-md slide">
              <h1 id="dancingText">hello</h1>
            </div>
          </div>
        </div>

      </div>
      
      <div className="container-md">
        <h1 className={s.heading}>With an insight into consulting for various industries and solving over 20 interesting problems leveraging AI</h1>
        <p className={s.subHeading}>we offer evolving Enterprises two key services</p>
        <Cards />
        <p className={s.subHeading}>Our Capablities in Different Aspects of AI</p>
        <img className={"img-responsive d-block " + s.img} src="https://mantra.ai/wp-content/themes/mantra_light_theme/images/chart2.png" width="70%" />

      </div>
      <div className={"container-md "+s.con}>
        <h1 className={s.heading}>Our Clients</h1>
        <Clients />
        <Clients />
      </div>      
    <h4 style={{textAlign: "center"}}>@A Spade Work Production</h4>
    </div>
  )
}