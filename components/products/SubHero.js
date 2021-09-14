import { useEffect, useState } from 'react'
import style from '../../styles/products/SubHero.module.css'
import Product from './product'

const SubHero = ({wave}) => {
    const [styling, setStyle] = useState({})
    useEffect(() => {
        if(wave){
            setStyle({
                display: "none"
            })
        }

    }, [])
    return(
        <div className={style.con}>
            <img style={styling} className={style.wave} src="./wave.png" />
            <Product />
        </div>
    )
}

export default SubHero