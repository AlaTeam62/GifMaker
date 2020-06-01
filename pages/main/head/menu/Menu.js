import s from './menu.module.css';

const Menu = () => {
    return (<menu className={s.menu_wrapper}>
        <div className={s.menu_button}>
            <div className={s.menu_button_dots}></div>
            <div className={s.menu_button_dots}></div>
            <div className={s.menu_button_dots}></div>
        </div>
    </menu>)
}

export default Menu;