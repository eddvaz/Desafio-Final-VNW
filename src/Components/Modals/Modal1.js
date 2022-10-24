import React from "react";
import * as S from "../../Styles/ModalStyles"

export const Modal1 = ({ onClose = () => {}, children}) => {
    return(
        <S.Modal>
            <S.buttonContainer>
                <button onClick={onClose}>X</button>
            </S.buttonContainer>
            <S.InfoContainer>{children}</S.InfoContainer>
        </S.Modal>
    )
}
export default Modal1;