import { GlobalStyles } from "./styles/GlobalStyles";
import { AvatarContainer, Container, Icons, Links } from "./styles/styles";

export function App() {
  return (
    <Container>
      <AvatarContainer>
        <img src="https://avatars.githubusercontent.com/u/37755163?v=4" alt="Foto de perfil"/>
      </AvatarContainer>

      <Links>
        <a href="" title="portfólio">Portfólio</a>
        <a href="" title="Linkedin">Linkedin</a>
        <a href="" title="Github">Github</a>
        <a href="" title="behance">Behance</a>
        <a href="" title="Instagram">Instagram</a>
      </Links>

      <Icons>

      </Icons>
      <GlobalStyles />
    </Container>
  )
}