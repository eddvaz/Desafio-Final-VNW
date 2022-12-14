import styled from "styled-components";
import "animate.css";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 90vh;
    background-color: #2d2d2d;
`

export const TitleContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2{
        font-size: 48px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #FFFF;
        animation: fadeInRightBig;
        animation-duration: 2s;
    }

    @media (max-width: 400px) {
        h2{
            font-size: 16px;
        }
    }
`

export const Title = styled.h1`
    font-size: 48px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #FFFF;
    animation: fadeInLeftBig;
    animation-duration: 2s;

    @media (max-width: 400px) {
        font-size: 32px;
    }
`

export const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    width: 30%;
    animation: fadeInUp;
    animation-duration: 3s;

    @media (max-width: 400px) {
        width: 350px;
        height: 450px;
    }
`

export const Paragraph = styled.p`
    font-size: 24px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #FFFF;
`

export const Figure = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    animation: zoomIn;
    animation-duration: 3s;

    img{
        width: 600px;
    }

    @media (max-width: 400px) {
        img{
            display: none;
        }
    }
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 70%;
`

export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    animation-name: zoomIn;
    animation-duration: 3s;

    img{
        width: 50px;
        height: 50px;
    }

    @media (max-width: 400px) {
        img{
            width: 35px;
            height: 35px;
        }
    }
`

