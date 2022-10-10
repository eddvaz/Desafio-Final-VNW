import React from "react";
import Programming from "../img/undraw_programming.svg";
import * as S from "../Styles/HomeStyles";

const Home = () => {
    return(
        <S.Container>
            <S.TitleContent>
                <S.Title>Edivaldo Vaz</S.Title>
            </S.TitleContent>
            <S.InfoContent>
                <S.Paragraph>
                    Olá a todos!
                    Meu nome é Edivaldo Vaz, aluno do Vai na Web!
                </S.Paragraph>
            </S.InfoContent>
            <S.Figure>
                <img src={Programming} alt="pairprogramming"/>
            </S.Figure>
        </S.Container>
    )
}

export default Home;