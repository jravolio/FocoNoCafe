import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Jost', sans-serif;
    }

    Html{
        @media (max-width: 640px){
            font-size: 9.5px;
        }
    }

    body{
        background: rgba(23,23,23,1);

    }

`;
