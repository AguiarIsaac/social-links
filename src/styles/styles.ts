import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 4rem;

  @media(max-width: 768px) {
    padding: 1rem;
  }
`

export const AvatarContainer = styled.div`
  max-width: 18.5rem;
  max-height: 18.5rem;

  border: 3px solid #008080;
  border-radius: 50%;
  padding: 0.25rem;

  img {
    border-radius: 50%;
  }

  @media(max-width: 768px) {
    max-width: 10rem;
    max-height: 10rem;
  }
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 18.5rem;

  a {
    padding: 1rem;
    width: 100%;
    text-align: center;

    text-decoration: none;
    cursor: pointer;

    border: 3px solid #008080;
    border-radius: 4px;

    color: aliceblue;
  }

  @media(max-width: 768px) {
    max-width: 12rem;
  }
`

export const Icons = styled.div`

`