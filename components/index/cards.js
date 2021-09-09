import Card from './card'
import s from '../../styles/home/cards.module.css'

const Cards = () => {
    return(
        <div className={s.con}>
            <Card />
            <Card />
        </div>
    )
}

export default Cards