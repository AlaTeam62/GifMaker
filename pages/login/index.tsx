import Head from 'next/head';
import Logo from "../../components/Logo/Logo";
import Button, { typeButton } from "../../components/Button/Button";
const style = require('./login.module.css');

const Login = () => {
    return (<div className={style.container}>
        <Head>
            <title> ContactApp - Войти</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2 className={style.header}>Contact app</h2>
        <div className={style.wrapper}>
            <Logo />
            <p className={style.login_header}>Войти</p>
            <form className={style.login__form}>
                <input className={style.login__form_input} placeholder='Username'></input>
                <input className={style.login__form_input} placeholder='Password'></input>
                <p className={style.login__form_registration}>Нет учётной записи? <a href='#'>Создайте её.</a></p>
                <p className={style.login__form_registration}><a href='#'>Не удаётся получить доступ к своей учетной записи?</a></p>
                <div className={style.login__form__buttons}>
                    <Button name='Назад' type={typeButton.prev} />
                    <Button name='Далее' type={typeButton.next} />
                </div>
            </form>
        </div>
    </div>)
}

export default Login;