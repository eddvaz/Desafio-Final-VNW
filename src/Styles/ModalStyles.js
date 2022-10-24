import styled from "styled-components";

export const Modal = styled.div`
    border-radius: 5px;
    width: 60%;
    height: 500px;
    margin-top: 44px;
    -webkit-box-shadow: 5px 5px 15px 5px #000000; 
    box-shadow: 5px 5px 15px 5px #000000;
`

export const buttonContainer = styled.div`
    display: flex;
    justify-content: end;
    padding: 16px;

    button{
        width: 20px;
        height: 20px;
        font-size: large;
        border: none;
        background-color: #FFF;
        cursor: pointer;     
    }
`

export const InfoContainer = styled.div`
    padding: 16px;
`