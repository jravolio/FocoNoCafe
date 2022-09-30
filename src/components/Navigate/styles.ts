import styled from "styled-components";

export const Container = styled.div`
    footer{
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        a{
            text-align: center;
            font-size: 1.3rem;
            border-radius: 50px;
            background: #363636;
            box-shadow: 3px 5px 50px #363636;
            color: #f2f2f2;
            padding: 20px;
            font-weight: 400;
            margin: 1rem 2rem;
            text-decoration: none;
        }
        @media (max-width: 758px){
            a{
                font-size: 1rem;
                padding: 10px;
                margin: 1rem 1rem;
            }
        }
    }

`