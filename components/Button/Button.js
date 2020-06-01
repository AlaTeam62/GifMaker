import style from './button-style.module.css';

export const typeButton = {
    next: "next",
    prev: "prev"
}

const Button = (props) => {    
    const setTypeButton = (type) => {
        if(type === typeButton.next){
            return style.button__next
        } else {
            return style.button__prev
        }
    }
    return (<button className={`${style.button} ${setTypeButton(props.type)}`}>
        {props.name}
    </button>)
}

export default Button;