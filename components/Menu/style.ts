import styled from 'styled-components';

export const MenuWrapper = styled.menu`
    display: block;
    width: 68px;
    height: 48px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
`;

export const MenuButton = styled.div`
    position: relative;
    cursor: pointer;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover{
        background: #6264a7;
    }
`;

export const MenuButtonDots = styled.div`
    position: relative;
    display: inline-block;
    text-align: center;
    width: 3px;
    height: 3px;
    border-radius: 100%;
    background: #ffffff;
    margin: 3px;
    &::before,
    &::after{
        content: '';
        position: absolute;
        top: -3px;
        width: 3px;
        height: 3px;
        border-radius: 100%;
        background: #ffffff;
        margin: 3px;
    }
    &::before{
        left: -10px;
    }
    &::after{
        right: -10px;
    }
`;
