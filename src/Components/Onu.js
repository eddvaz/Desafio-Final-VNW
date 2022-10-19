import React from "react";
import * as S from "../Styles/OnuStyles";
import ODS1 from "../img/ODS-1.svg";
import ODS2 from "../img/ODS-2.svg";
import ODS3 from "../img/ODS-3.svg";
import ODS4 from "../img/ODS-4.svg";


const Onu = () => {
    return(
        <S.CardContainer>
            <S.Card>
                <S.CardHeader>
                    <img src={ODS1}/>
                </S.CardHeader>
                <S.CardContent>
                    <p>
                        A comissão promove reuniões mensais para analisar o andamento de diversos programas 
                        governamentais e buscar a intersecção das ações entre os diferentes setores em prol do alinhamento à Agenda 2030.
                    </p>
                </S.CardContent>
            </S.Card>

            <S.Card>
                <S.CardHeader>
                    <img src={ODS2}/>
                </S.CardHeader>
                <S.CardContent>
                    <p>
                        A comissão promove reuniões mensais para analisar o andamento de diversos programas 
                        governamentais e buscar a intersecção das ações entre os diferentes setores em prol do alinhamento à Agenda 2030.
                    </p>
                </S.CardContent>
            </S.Card>

            <S.Card>
                <S.CardHeader>
                    <img src={ODS3}/>
                </S.CardHeader>
                <S.CardContent>
                    <p>
                        A comissão promove reuniões mensais para analisar o andamento de diversos programas 
                        governamentais e buscar a intersecção das ações entre os diferentes setores em prol do alinhamento à Agenda 2030.
                    </p>
                </S.CardContent>
            </S.Card>

            <S.Card>
                <S.CardHeader>
                    <img src={ODS4}/>
                </S.CardHeader>
                <S.CardContent>
                    <p>
                        A comissão promove reuniões mensais para analisar o andamento de diversos programas 
                        governamentais e buscar a intersecção das ações entre os diferentes setores em prol do alinhamento à Agenda 2030.
                    </p>
                </S.CardContent>
            </S.Card>

        </S.CardContainer>
    )
}

export default Onu;