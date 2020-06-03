// import style from './button-style.module.css';
const style = require('button-style.module.css')

export const typeButton = {
    next: "next",
    prev: "prev"
}

type PropsType = {
    type: typeof typeButton.next | typeof typeButton.prev
    name: string
}

const Button = (props: PropsType) => {    
    const setTypeButton = (type: string) => {
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