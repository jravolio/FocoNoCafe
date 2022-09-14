import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        background-color:rgb(32, 35, 41);
    }

    .App{
        display: flex;
        justify-content: center;
        align-items: center;
    }


`