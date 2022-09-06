import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    shadow: string,
    bg: string,
    caption: string,
    textPrimary: string,
    textSecondary: string,
  }
}

declare module '@emotion/react' {
  export interface Theme extends LibTheme {}
}