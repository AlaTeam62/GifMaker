import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;  
    padding:8px;    
    width: 48px;
    height: 48px;    
    margin-right: 6px;
    &:hover{
        background: #5c5e9d;
        cursor: pointer;
    }
`;

export const Avatar = styled.img`    
    width:32px;
    height:32px;
    border-radius: 100%;
`;
