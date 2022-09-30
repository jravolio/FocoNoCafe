import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Jost', sans-serif;
    }

    body{
        background: rgba(23,23,23,1);
        @media (max-width: 640px){
            font-size: 14px;
        }
        
        @media (min-width: 768px){
            margin: 0 10%;
        }
    }


    /* body.on {
        background: radial-gradient(#555, #111);
    } */

    body.on .bulb {
    background: #f9db5e ;
    box-shadow: 0 0 50px #f9db5e , 0 0 100px #f9db5e , 0 0 150px #f9db5e , 0 0 280px #f9db5e ,
        0 0 250px #f9db5e , 0 0 300px #f9db5e , 0 0 350px #f9db5e ;
    }

    body.on .bulb::before {
    background: #f9db5e ;
    }

    body.on .bulb::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    background: #f9db5e ;
    border-radius: 50%;
    filter: blur(40px);
    }

    body.on .bulb span:nth-child(1) {
    box-shadow: 20px 20px 0 10px #f9db5e ;
    }

    body.on .bulb span:nth-child(2) {
    box-shadow: -20px 20px 0 10px #f9db5e ;
    }
`;
