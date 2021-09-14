import style from '../../styles/products/SubHero.module.css'
import Product from './product'

const SubHero = () => {
    return(
        <div className={style.con}>
            <img className={style.wave} src="./wave.png" />
            <Product />
        </div>
    )
}

export default SubHero