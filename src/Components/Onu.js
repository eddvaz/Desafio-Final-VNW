import React, { useState } from "react";
import * as S from "../Styles/OnuStyles";
import ODS1 from "../img/ODS-1.svg";
import ODS2 from "../img/ODS-2.svg";
import ODS3 from "../img/ODS-3.svg";
import ODS4 from "../img/ODS-4.svg";
import Modal1 from "./Modals/Modal1";

const Onu = () => {

    const [modalODS1, setModalODS1] = useState(false);
    const [modalODS2, setModalODS2] = useState(false);
    const [modalODS3, setModalODS3] = useState(false);
    const [modalODS4, setModalODS4] = useState(false);

    return(
        <S.Container>
            <S.ImageContainer>
                <S.Image onClick={() => setModalODS1(true)} src={ODS1}/>
                <S.Image onClick={() => setModalODS2(true)} src={ODS2}/>
                <S.Image onClick={() => setModalODS3(true)} src={ODS3}/>
                <S.Image onClick={() => setModalODS4(true)} src={ODS4}/>
            </S.ImageContainer>

            {modalODS1 ? (
                <Modal1 onClose={() => setModalODS1(false)}>
                    <S.TitleContent>
                        <h2>Erradicação da pobreza</h2>
                    </S.TitleContent>
                    <S.InfoContent>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                            accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                    </S.InfoContent>
                </Modal1>
            ) : null}

            {modalODS2 ? (
                <Modal1 onClose={() => setModalODS2(false)}>
                    <S.TitleContent>
                        <h2>Fome Zero e Agicultura Sustentável </h2>
                    </S.TitleContent>
                    <S.InfoContent>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                            accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                    </S.InfoContent>
                </Modal1>
            ) : null}

            {modalODS3 ? (
                <Modal1 onClose={() => setModalODS3(false)}>
                    <S.TitleContent>
                        <h2>Saúde e Bem Star</h2>
                    </S.TitleContent>
                    <S.InfoContent>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                            accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                    </S.InfoContent>
                </Modal1>
            ) : null}

            {modalODS4 ? (
                <Modal1 onClose={() => setModalODS4(false)}>
                    <S.TitleContent>
                        <h2>Educação de Qualidade</h2>
                    </S.TitleContent>
                    <S.InfoContent>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                            accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                    </S.InfoContent>
                </Modal1>
            ) : null}

        </S.Container>
    )
}

export default Onu;