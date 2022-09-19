import '@emotion/react'
import { ThemeVariant } from './features/AppTheme/appTheme.constants';

declare module '@emotion/react' {
  export interface Theme {
    themeVariant: ThemeVariant,
    isDark: boolean,
  }
}

declare module '@emotion/react' {
  export interface Theme extends LibTheme {}
}