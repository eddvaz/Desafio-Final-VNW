import React from "react";
import * as S from "../Styles/HomeStyles";
import Programming from "../img/undraw_programming.svg";
import githubLogo from "../img/iconmonstr-github.svg";
import inLogo from "../img/iconmonstr-linkedin.svg";
import instaLogo from "../img/iconmonstr-instagram.svg";

const Home = () => {
    return(
        <S.Container>
            <S.TitleContent>
                <S.Title>Edivaldo Vaz</S.Title>
                <h2>Front-end Developer</h2>
            </S.TitleContent>
            <S.SocialMediaContainer>
                <a href="https://github.com/eddvaz" target="_blank">
                    <img src={githubLogo}/>
                </a>
                <a href="https://www.linkedin.com/in/edivaldo-vaz-dev/" target="_blank">
                    <img src={inLogo}/>
                </a>
                <a href="https://www.instagram.com/edd.vaz/" target="_blank">
                    <img src={instaLogo}/>
                </a>
            </S.SocialMediaContainer>
            <S.FlexContainer>
                <S.InfoContent>
                    <S.Paragraph>
                        Bem vindos ao meu Portifólio!  
                    </S.Paragraph>
                    <S.Paragraph>
                        Me chamo Edivaldo Vaz, tenho 28 anos.
                        Sou desenvolvedor Front-end em transição de carreira e busco uma 
                        oportunidade na área tech.
                        Tenho experiência com HTML, CSS, Javascript e ReactJS.
                    </S.Paragraph>
                </S.InfoContent>
                <S.Figure>
                    <img src={Programming} alt="pairprogramming"/>
                </S.Figure>
            </S.FlexContainer>
        </S.Container>
    )
}

export default Home;