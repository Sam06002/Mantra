import style from '../../styles/products/hero.module.css'

const Hero = () => {
    return(
        <div className={"container-md " + style.con}>
            <h3 className={style.heading}>A deep insight into how the industry works has helped us design products which solve very relevant Industry problems.</h3>
            {/* <h1 className={style.heading}>A deep insight into how the industry works has helped us design products which solve very relevant Industry problems.</h1> */}
            <img className={style.img} src="https://mantra.ai/wp-content/themes/mantra_light_theme/images/banner_products.png" />
        </div>
    )
}

export default Hero