import Menu from '../Menu/Menu';
import { HeaderWrapper, ComponentWrapper, NameApp } from './style';
import AvatarBlock from '../AvatarBlock/AvatarBlock';

const Header = () => {
    return (
        <HeaderWrapper>

            <ComponentWrapper>
                <Menu />
            </ComponentWrapper>

            <ComponentWrapper>
                <NameApp>ContactApp</NameApp>
            </ComponentWrapper>

            <ComponentWrapper>
                <AvatarBlock />
            </ComponentWrapper>

        </HeaderWrapper>
    )
}

export default Header;
