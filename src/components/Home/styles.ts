import styled from "styled-components";

export const Container = styled.div`
  a {
    text-decoration: none;
  }

  .card {
    color: #f2f2f2;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;

    border-radius: 30px;

    background-color: #523828;

    padding-top: 2rem;
    padding-bottom: 2rem;

    margin: 2rem;

    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);

    img {
      margin-bottom: 1.5rem;
      height: 7rem;
    }

    h1 {
      font-size: 1.7rem;
    }
  }



  .bulb {
    position: relative;
    width: 80px;
    height: 80px;
    background: #444;
    border-radius: 50%;
    z-index: 2;
    left: 325px;

    transition: 0.1s;
  }


  .bulb::before {
    content: "";
    position: absolute;
    top: -50px;
    left: 22.5px;
    width: 35px;
    height: 80px;
    background: #444;
    border-top: 30px solid #000;
    border-radius: 10px;
  }


  .bulb span:nth-child(1) {
    position: absolute;
    top: -16px;
    left: -4px;
    display: block;
    width: 30px;
    height: 30px;
    background: transparent;
    transform: rotate(342deg);
    border-bottom-right-radius: 40px;
    box-shadow: 20px 20px 0 10px #444;
  }



  .bulb span:nth-child(2) {
    position: absolute;
    top: -16px;
    right: -4px;
    display: block;
    width: 30px;
    height: 30px;
    background: transparent;
    transform: rotate(17deg);
    border-bottom-left-radius: 40px;
    box-shadow: -20px 20px 0 10px #444;
  }



  .fullBulb{
    rotate: calc(180deg);
  }
`;
