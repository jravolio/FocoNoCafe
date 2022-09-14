import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    .App{
        background: rgb(133,88,61);
        background: linear-gradient(90deg, rgba(133,88,61,1) 0%, rgba(82,56,40,1) 100%);
    }


`