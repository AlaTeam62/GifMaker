import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    width: 100%;
    padding-top: 10%;
`;

export const Header = styled.h2`
    text-align: center;
    color: #6264a7;
    font-size: 36px;
    font-weight: 400;
`;

export const Wrapper = styled.div`
    background: #ffffff;
    box-shadow: 0 2px 6px rgba(0,0,0,.2);
    padding: 44px;
    max-width: 440px;
    width: 100%;
    margin: 0 auto;
`;

export const BlockHeader = styled.p`
    font-size: 24px;
    font-weight: 600;
`;

export const FormInput = styled.input`
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,.6);
    padding: 6px 10px;
    padding-left: 0;
    margin-bottom: 10px;
    font-size: 15px;
    outline: none;
    &:focus{
        border-color: #0067b8;
    }
`;

export const FormLink = styled.p`
    font-size: 13px;
    a{
        color: #0067b8;
        text-decoration: none;
    }
    a:hover{
        color: #000000;
        text-decoration: underline;
    }
`;

export const ButtonsBlock = styled.div`
    margin-top: 20px;
    text-align: right;
`;
