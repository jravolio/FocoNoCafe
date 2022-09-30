import styled from "styled-components";

export const Container = styled.div`

    .product{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        margin: 7rem 1rem;

        color: #f2f2f2;

        img{
            width: 14rem;
        }

        h3{
            font-weight: 300;
        }
        
        .logoLink{
            position: relative;
            width: 20px;
            bottom: -60px;
            left: -143px;
            opacity: 50%;
        }

        a{
            margin-top: 2rem;
            border-radius: 12px;
            border: 1px solid #f2f2f2;
            padding: 0.5rem 7rem;
            text-decoration: none;
            color: #f2f2f2;
            opacity: 50%;

        }

        @media (max-width: 368px){
            .logoLink{
                bottom: -70px;
                left: -115px;
            }
        }
    }
`