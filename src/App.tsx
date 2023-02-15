import { GlobalStyles } from "./styles/GlobalStyles";
import { Profile, Container, Icons, Links } from "./styles/styles";
import { ThemeProvider } from "styled-components";
import Light from "./styles/themes/Light";
import Dark from "./styles/themes/Dark";

import browser from './assets/browser.svg'
import behance from './assets/behance.svg'
import githubD from './assets/githubL.svg'
import githubL from './assets/githubD.svg'
import instagram from './assets/instagram.svg'
import linkedin from './assets/linkedin.svg'
import { useEffect, useState } from "react";

export function App() {

  const [iconGitHub, setIconGithub] = useState(githubL)
  const [themeOfSystem, setThemeOfSystem] = useState(Light)

  const detectDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

  useEffect(() => {

    if(detectDarkTheme) {
      setIconGithub(githubD)
      setThemeOfSystem(Dark)
    }
  },[])

  
  return (
    <ThemeProvider theme={themeOfSystem}>
      <Container>
        <Profile>
          <img src="https://avatars.githubusercontent.com/u/37755163?v=4" alt="Foto de perfil"/>
          <span>Isaac Aguiar</span>
          <span>Desenvolvedor Web</span>
        </Profile>

        <Icons>
          <a href="" title="Behance"><img src={behance} alt="site de autopromoção" /></a>
          <a href="" title="Linkedin"><img src={linkedin} alt="Rede social profissional" /></a>
          <a href="" title="Github"><img src={iconGitHub} alt="armazenamento de código na nuvem" /></a>
          <a href="" title="Portfolio"><img src={browser} alt="Portfólio pessoal" /></a>
          <a href="" title="Instagram"><img src={instagram} alt="Rede social" /></a>
        </Icons>
        <Links>
          <a href="" title="portfólio">Portfólio</a>
          <a href="" title="Linkedin">Linkedin</a>
          <a href="" title="Github">Github</a>
          <a href="" title="behance">Behance</a>
          <a href="" title="Instagram">Instagram</a>
        </Links>
        <GlobalStyles />
      </Container>
    </ThemeProvider>
  )
}