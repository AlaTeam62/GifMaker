import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    background: #464775;
    height: 48px;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
`;

export const NameApp = styled.h2`
    padding: 0;
    margin: 0;
    color: #ffffff;
`;

export const ComponentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
`;