import 'bootstrap/dist/css/bootstrap.min.css'
import s from '../styles/home/home.module.css'
import Cards from '../components/index/cards'
import Clients from '../components/index/clients'

export default function Home() {
  return (
    <div>
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

    </div>
  )
}
