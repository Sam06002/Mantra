import Company from "./company"
import s from '../../styles/home/clients.module.css'

const Clients = () => {
    return(
        <div className={s.con}>
            <Company /> 
            <Company /> 
            <Company /> 
            <Company /> 
        </div>
    )
}

export default Clients