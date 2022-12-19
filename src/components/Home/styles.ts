import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #f2f2f2;
  text-align: center;

  height: 100vh;

  #bg-video {
    width: 100vw;
    height: 100vh;
    position: absolute;
    object-fit: cover;
    z-index: -99;
    animation: videoBg 10s forwards;
  }

  .animation-div {
    text-shadow: 1px 3px 5px black;
    margin-bottom: 2rem;
    img {
      transform: translateY(-100vh);
      animation: fall 2.4s forwards;
      width: 10rem;
      clip-path: circle();
    }

    h1 {
      transform: translateY(-100vh);
      animation: fall 1.9s forwards;
    }

    h3 {
      transform: translateY(-100vh);
      animation: fall 1.5s forwards;
    }
  }

  @keyframes fall {
    0% {
      opacity: 0;
    }
    100% {
      transform: translateY(0vh);
    }
  }

  @keyframes videoBg {
    100% {
      filter: blur(1.5rem);
    }
  }

  h3 {
    font-weight: 300;
  }

  .links {
    background-color: #121616;
    padding: 2rem;
    border-radius: 12px;

    .link {
      background: rgb(224, 168, 106);
      background: linear-gradient(
        9deg,
        rgba(224, 168, 106, 1) 0%,
        rgba(180, 130, 76, 1) 77%
      );

      color: white;
      text-decoration: none;
      font-size: 1.5rem;
      letter-spacing: 2px;

      border-radius: 12px;
      padding: 1rem 2rem;

      display: flex;
      gap: 6rem;
      align-items: center;
      justify-content: space-between;

      animation: rise 1.5s forwards;

      div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      img {
        width: 2rem;
      }

      & + .link {
        margin-top: 0.5rem;
      }

      .user {
        font-size: 0.8rem;
        opacity: 0.5;
      }

      &.youtube {
        background: #cb1f1f;
      }

      &.facebook {
        background: #1f64cb;
      }

      &.instagram {
        background: rgb(255, 196, 45);
        background: linear-gradient(
          48deg,
          rgba(255, 196, 45, 1) 0%,
          rgba(255, 153, 0, 1) 17%,
          rgba(211, 61, 205, 1) 70%,
          rgba(82, 0, 255, 1) 96%,
          rgba(0, 102, 255, 1) 100%
        );
      }
    }

    @keyframes rise {
      0% {
        opacity: 0;
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  @media (max-width: 425px) {
    .links {
      .link {
        padding: 2rem 2rem;
      }
    }
  }
`;
