import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    shadow: string,
    bg: string,
    caption: string,
    textPrimary: string,
    textSecondary: string,
    // light: {
    //   shadow: string,
    //   bg: string,
    //   caption: string,
    //   textPrimary: string,
    //   textSecondary: string,
    // },
    // dark: {
    //   shadow: string,
    //   bg: string,
    //   caption: string,
    //   textPrimary: string,
    //   textSecondary: string,
    // },
    // colors: {
    //   dark: string,
    //   light: string,
    // },
  }
}

declare module '@emotion/react' {
  export interface Theme extends LibTheme {}
}