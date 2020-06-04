import Menu from '../Menu/Menu';
import { HeaderWrapper, ComponentWrapper, NameApp } from './style';

const Header = () => {
    return (<HeaderWrapper>
        <ComponentWrapper>
            <Menu />
        </ComponentWrapper>
        <ComponentWrapper>
            <NameApp>ContactApp</NameApp>
        </ComponentWrapper>
        <ComponentWrapper>
            <img alt='ava' />
        </ComponentWrapper>
    </HeaderWrapper>)
}

export default Header;