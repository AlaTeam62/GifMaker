import s from './header.module.css';
import Menu from '../menu/Menu';

const Header = () => {
    return (<header className={s.header__wrapper}>
        <div className={s.component__wrapper}>
            <Menu />
        </div>
        <div className={s.component__wrapper}>
            <h2 className={s.nameApp}>ContactApp</h2>
        </div>
        <div className={s.component__wrapper}>
            <img alt='ava' />
        </div>
    </header>)
}

export default Header;