import { ButtonGrey } from './style';

type PropsType = {   
    name: string
}

const ButtonPrev = (props: PropsType) => {
    return <ButtonGrey>{props.name}</ButtonGrey>
}

export default ButtonPrev;
