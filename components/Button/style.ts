import styled from 'styled-components'

export const ButtonBlue = styled.button`
    display: inline-block;
    border: none;
    border-radius: 0;
    outline: none;
    cursor: pointer;
    padding: 10px 30px;
    color: #ffffff;
    margin-left: 5px;
    background: #0067B8;

    &:hover{
        background: #005da6;
    };
`;

export const ButtonGrey = styled(ButtonBlue)`
    color: #000000;
    background: rgba(0, 0, 0, 0.2);

    &:hover{
        background: rgba(0, 0, 0, 0.3);
    };
`;
