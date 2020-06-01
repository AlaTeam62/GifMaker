import style from './logo.module.css';

const Logo = () => {
    return (<a href='#' className={style.login__logo}>
        <div className={style.login__logo_img}><h1>Logo Contact</h1></div>
    </a>)
}

export default Logo;