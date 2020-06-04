import { ButtonBlue, ButtonGrey } from './style';

export const typeButton = {
    next: "next",
    prev: "prev"
}

type PropsType = {
    type: typeof typeButton.next | typeof typeButton.prev
    name: string
}

const Button = (props: PropsType) => {
    return (props.type === typeButton.next ?
        <ButtonBlue>{props.name}</ButtonBlue> :
        <ButtonGrey>{props.name}</ButtonGrey>
    )
}

export default Button;