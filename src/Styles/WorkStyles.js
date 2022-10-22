import styled from "styled-components";

export const WorkContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: #2d2d2d;
    margin-top: 20px;

    @media (max-width: 400px) {
       width : 100%;
       justify-content: center;
       align-items: center;
       padding: 25px;
    }
`