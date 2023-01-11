import styled from "styled-components";

export const Container = styled.div`

    .product{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        background-color: #d19b61;
        padding: 2rem;
        border-radius: 1rem;

        color: #171717;

        img{
            width: 14rem;
        }

        h3{
            font-weight: 300;
            margin-top: 1rem;
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
            border: 1px solid #171717;
            padding: 0.5rem 7rem;
            text-decoration: none;
            color: #171717;
        }

        @media (max-width: 368px){
            .logoLink{
                bottom: -70px;
                left: -115px;
            }
        }        
    }
    

    @media (min-width: 768px){
    .product{
        margin: 7rem 10rem;
    }
    }
`