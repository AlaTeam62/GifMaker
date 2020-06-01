import s from './head.module.css';
import Menu from './menu/Menu';

const Head = () => {
    return (<header className={s.head_wrapper}>
        <div className={s.component_wrapper}>
            <Menu />
        </div>
        <div className={s.component_wrapper}>
            <h2 className={s.nameApp}>ContactApp</h2>
        </div>
        <div className={s.component_wrapper}>
            <img alt='ava' />
        </div>
    </header>)
}

export default Head;