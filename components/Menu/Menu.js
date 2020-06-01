import s from './menu.module.css';

const Menu = () => {
    return (<menu className={s.menu__wrapper}>
        <div className={s.menu__button}>
            <div className={s.menu__button_dots}></div>
            <div className={s.menu__button_dots}></div>
            <div className={s.menu__button_dots}></div>
        </div>
    </menu>)
}

export default Menu;