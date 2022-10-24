import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16px;
`

export const ImageContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
`

export const Image = styled.img`
    width: 200px;
    border-radius: 5px;
    cursor: pointer;
`

export const TitleContent = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;

    h2{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.5rem;
    }

`
export const InfoContent = styled.div`
    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.2rem;
    }
`