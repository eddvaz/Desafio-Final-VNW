import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        background-color: #F2F2F2;
    }
`

export const Nav = styled.nav`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UL = styled.ul`
    width: 80%;
    height: 5vh;
    display: flex;
    justify-content: space-around;
    align-items: center; 

    @media (max-width: 375px) {
        flex-direction: column;
    }
`

export const LI = styled.li`
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    button{
        font-size: 24px;
    }
    
`