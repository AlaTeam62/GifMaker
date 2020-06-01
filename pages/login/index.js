import Logo from "../../components/Logo/Logo";
import Button, { typeButton } from "../../components/Button/Button";
import s from './login.module.css';

const Login = () => {
    return (<div className={s.container}>
        <h2 className={s.header}>Contact app</h2>
        <div className={s.wrapper}>
            <Logo />
            <p className={s.login_header}>Войти</p>
            <form className={s.login__form}>
                <input className={s.login__form_input} placeholder='Username'></input>
                <input className={s.login__form_input} placeholder='Password'></input>
                <p className={s.login__form_registration}>Нет учётной записи? <a href='#'>Создайте её.</a></p>
                <p className={s.login__form_registration}><a href='#'>Не удаётся получить доступ к своей учетной записи?</a></p>
                <div className={s.login__form__buttons}>
                    <Button name='Назад' type={typeButton.prev} />
                    <Button name='Далее' type={typeButton.next} />
                </div>
            </form>
        </div>
    </div>)
}

export default Login;