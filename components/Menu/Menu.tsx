const style = require('./menu.module.css');

const Menu = () => {
    return (<menu className={style.menu__wrapper}>
        <div className={style.menu__button}>
            <div className={style.menu__button_dots}></div>
            <div className={style.menu__button_dots}></div>
            <div className={style.menu__button_dots}></div>
        </div>
    </menu>)
}

export default Menu;