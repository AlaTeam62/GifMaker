const style = require('./logo.module.css');

const Logo = () => {
    return (<a href='#' className={style.logo}>
        <div className={style.logo__img}><h1>Logo Contact</h1></div>        
    </a>)
}

export default Logo;