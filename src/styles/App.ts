import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Jost', sans-serif;
    }

    body{
        background: #193338;
        @media (max-width: 640px){
            font-size: 14px;
        }
    }
`