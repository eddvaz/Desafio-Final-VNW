import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    
    
    @media (max-width: 400px) {
        
    }   

`

export const Card = styled.div`
    width: 60%;
    display: flex;
    height: 200px;
    

    img{
        width: 200px;
        border-radius: 5px;

    }

    @media (max-width: 400px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 390px;
        width: 90%;
        border: 5px solid #1BE990;
        border-radius: 5px;


        img{
            width: 150px;
        }
    }
`

export const CardHeader = styled.div`
    margin-right: 16px;
`

export const CardContent = styled.div`
    border: 1px solid;
    padding: 16px;

    @media (max-width: 400px) {
        height: 200px;
        border: none;
    }
`