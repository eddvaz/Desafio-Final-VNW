import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    
`

export const Card = styled.div`
    width: 60%;
    display: flex;
    height: 200px;
    img{
        width: 200px;
        border-radius: 5px;

    }
`

export const CardHeader = styled.div`
    margin-right: 16px;
`

export const CardContent = styled.div`
    border: 1px solid;
    padding: 16px;

`