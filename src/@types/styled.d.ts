import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
      textColor: string,
      borderColor: string
    }
  }
}