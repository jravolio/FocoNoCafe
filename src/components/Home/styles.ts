import styled from "styled-components";

export const Container = styled.div`
    color: #f2f2f2;

    .card{
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      
      border-radius: 30px;

      background-color: #523828;

      padding-top: 2rem;
      padding-bottom: 2rem;

      margin: 2rem;

      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);

      img{
        margin-bottom: 1.5rem;
        height: 7rem;
      }

      h1{
        font-size: 1.7rem;
      }
    }
`