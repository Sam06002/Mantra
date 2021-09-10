import s from '../../styles/home/company.module.css'

const Company = () => {
    return(
        <div className={s.con}>
            <div className={s.subCon}>

                <img className={s.img} src="https://mantra.ai/wp-content/themes/mantra_light_theme/images/AIA.png" />
                <div className={s.hidden}>
                    <p className={s.subCard}>Test 1</p>
                    <p className={s.subCard}>TEST 2</p>
                    <p className={s.subCard}>A Long Text for test</p>
                </div>
            </div>
        </div>
    )
}

export default Company