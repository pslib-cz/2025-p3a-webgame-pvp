import style from '../assets/styles/components/other.module.css'

export const Loading = ({ message = "Loading... "}) => (

    <div className={`${style.loading} ${style.page}`}>
        <span className={style.seba}/>
        <div className={style.spinner}></div>
        <p className={style.loadingText}>{message}</p>
    </div>
    

);