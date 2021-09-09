import s from '../../styles/home/card.module.css'

const Card = () => {
    return(
        <div className={s.con + " container-sm"}>
            <img className={s.img} src="https://mantra.ai/wp-content/themes/mantra_light_theme/images/strategy.png" />
            <h3 className={s.heading}>AI Strategy & Roadmap</h3>
            <p className={s.subHeading + " "}>We can consult on how to achieve your organization goals utilizing AI/ML in New & Existing Businesses, Operations and Marketing and come up with a roadmap for the same.</p>
        </div>
    )
}

export default Card