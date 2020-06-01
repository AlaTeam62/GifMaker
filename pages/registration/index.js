import Head from 'next/head'
import Logo from "../../components/Logo/Logo";
import Button, { typeButton } from "../../components/Button/Button";
import s from './registration.module.css';

const Registration = () => {
    return (<div className={s.container}>
        <Head>
            <title> ContactApp - Регистрация</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h2 className={s.header}>Contact app</h2>
        <div className={s.wrapper}>
            <Logo />
            <p className={s.information}>Введите адрес электронной почты</p>
            <p>Этот адрес электронной почты будет использован для настройки ContactApp. Если у вас уже есть учетная запись, можно использовать соответствующий адрес.</p>
            <form className={s.registration_form}>
                <input className={s.registration_form_input} placeholder='Username'></input>
                <input className={s.registration_form_input} placeholder='Email'></input>
                <input className={s.registration_form_input} placeholder='Password'></input>
                <input className={s.registration_form_input} placeholder='Confirm password'></input>
                <div className={s.registration_form__buttons}>
                    <Button name='Назад' type={typeButton.prev} />
                    <Button name='Далее' type={typeButton.next} />
                </div>
            </form>
        </div>
    </div>)
}

export default Registration;