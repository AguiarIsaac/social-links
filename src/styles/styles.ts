import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  background: ${props => props.theme.colors.background};
  background-size: 500% 100%;
  animation: colors 8s infinite alternate;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;

  @media(max-width: 768px) {
    padding: 1rem;
  }

  @keyframes colors {
    0% {
      background-position-x: 0% ;
    }

    100% {
      background-position-x: 100% ;
    }
  }
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  max-width: 12rem;

  img {
    border-radius: 50%;
  }
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  width: 14.5rem;

  a {
    padding: 1rem;
    width: 100%;
    text-align: center;
    color: ${props => props.theme.colors.textColor};

    text-decoration: none;
    cursor: pointer;

    border: 2px solid ${props => props.theme.colors.borderColor};
    border-radius: 4px;

    transition:  0.4s;


    :hover {
      scale: 1.1;
    }
  }

  @media(max-width: 768px) {
    max-width: 12rem;
  }
`

export const Icons = styled.div`
  width: 14.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  a,img {
    width: 2rem;
    height: 2rem;
  }

  a {
    transition: 0.4s;
    :hover {
      scale: 1.1
    }
  }
`