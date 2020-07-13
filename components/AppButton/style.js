import styled from 'styled-components';

export const ButtonStyle = styled.div`
    cursor: pointer;
    text-align: center;
    padding: 20px 10px;
    opacity: 0.8;
    border-left: 4px solid transparent;
    &:hover{
        background: rgba(98,100,167,.25);
        opacity: 1;        
    }
    &.active{
        border-left: 4px solid #ffffff;
        background: rgba(98,100,167,.25);
    }
    img{
        width: 30px;
    }
    p{
        color: #fff;
        font-size: 11px;    
        opacity: 0.8;    
        margin: 0;
    }
`;
