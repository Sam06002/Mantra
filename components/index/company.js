import s from '../../styles/home/company.module.css'

const Company = () => {
    return(
        <div className={"col-md-3 text-center "+s.con}>
            <div className="image-box">
                <div className="content">
                    <img className={s.img} src="https://mantra.ai/wp-content/themes/mantra_light_theme/images/AIA.png" />
                    <div className={s.hidden}>
                        <p>hi</p>
                        <p>hi</p>
                        <p>hi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company