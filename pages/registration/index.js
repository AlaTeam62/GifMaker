import Logo from "../../components/Logo/Logo";
import Button, { typeButton } from "../../components/Button/Button";
import s from './registration.module.css';

const Registration = () => {
    return (<div className={s.container}>
        <h2 className={s.header}>Contact app</h2>
        <div className={s.wrapper}>
            <Logo />
            <p className={s.login_header}>Введите адрес электронной почты</p>
            <p>Этот адрес электронной почты будет использован для настройки ContactApp. Если у вас уже есть учетная запись, можно использовать соответствующий адрес.</p>
            <form className={s.login__form}>
                <input className={s.login__form_input} placeholder='Username'></input>
                <input className={s.login__form_input} placeholder='Email'></input>
                <input className={s.login__form_input} placeholder='Password'></input>
                <input className={s.login__form_input} placeholder='Confirm password'></input>                
                <div className={s.login__form__buttons}>
                    <Button name='Назад' type={typeButton.prev} />
                    <Button name='Далее' type={typeButton.next} />
                </div>
            </form>
        </div>
    </div>)
}

export default Registration;