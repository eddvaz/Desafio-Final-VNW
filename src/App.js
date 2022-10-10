import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WavyContainer, WavyLink } from "react-wavy-transitions";
import Home from "./Components/Home";
import Onu from "./Components/Onu";
import Works from "./Components/Works";
import * as S from "./Styles/AppStyles";

function App() {
  return (
    <Router>
      <S.GlobalStyle />
      <WavyContainer />
      <S.Nav>
        <S.UL>
          <S.LI>
            <WavyLink to="/" color="#00FF00">Início</WavyLink>
          </S.LI>
          <S.LI>
            <WavyLink to="/projetos" color="#8f44fd">Projetos</WavyLink>
          </S.LI>
          <S.LI>
            <WavyLink to="/onu" color="#2f44fd">ONU</WavyLink>
          </S.LI>
        </S.UL>
      </S.Nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projetos" element={<Works />}/>
        <Route path="/onu" element={<Onu />}/>
      </Routes>
    </Router>   
  );
}

export default App;
