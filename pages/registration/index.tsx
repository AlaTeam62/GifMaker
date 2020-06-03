import Head from 'next/head';
import Logo from "../../components/Logo/Logo";
import Button, { typeButton } from "../../components/Button/Button";
const style = require('./registration.module.css');

const Registration = () => {
    return (<div className={style.container}>
        <Head>
            <title> ContactApp - Регистрация</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2 className={style.header}>Contact app</h2>
        <div className={style.wrapper}>
            <Logo />
            <p className={style.information}>Введите адрес электронной почты</p>
            <p>Этот адрес электронной почты будет использован для настройки ContactApp. Если у вас уже есть учетная запись, можно использовать соответствующий адрес.</p>
            <form className={style.registration_form}>
                <input className={style.registration_form_input} placeholder='Username'></input>
                <input className={style.registration_form_input} placeholder='Email'></input>
                <input className={style.registration_form_input} placeholder='Password'></input>
                <input className={style.registration_form_input} placeholder='Confirm password'></input>
                <div className={style.registration_form__buttons}>
                    <Button name='Назад' type={typeButton.prev} />
                    <Button name='Далее' type={typeButton.next} />
                </div>
            </form>
        </div>
    </div>)
}

export default Registration;