import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    shadow: string,
    bg: string,
    caption: string,
    textPrimary: string,
    textSecondary: string,
    accent: string,
    isDark: boolean,
  }
}

declare module '@emotion/react' {
  export interface Theme extends LibTheme {}
}