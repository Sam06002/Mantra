import style from '../../styles/products/product.module.css'

const Product = () => {
    return(
        <div className={style.con + " container-md"}>
            <div className={style.detail}>
                <h4 className={style.heading}>Industry Specific Bot Solutions:</h4>
                <p className={style.content}>Be it HR Ops, IT Ops or even handholding the customer journey on B2C sites, our out-of-the box Bot Solution incorporates Business Workflows, NLP and a robust Live Agent integration to provide an industry defining Bot experience.</p>
            </div>
            <div className={style.imgCon}>
                <img className={style.img} src="https://mantra.ai/wp-content/themes/mantra_light_theme/images/increasing-sales.png" />
                <h3 className={style.imgHeading}>10X Increase in Conversions For Religare</h3>
            </div>
        </div>
    )
}

export default Product