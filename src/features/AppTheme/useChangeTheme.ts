import { useState } from 'react';
import { LocalStorageKey } from '../../shared/constants';
import { getAppInfoItemInStorage, setAppInfoItemInStorage } from '../../shared/utils/storage';

const themeLight = {
  shadow: 'rgba(0, 0, 0, 0.25)',
  bg: '#ffffff',
  caption: '#ffffff',
  textPrimary: '#191919',
  textSecondary: '#6B6B6B',
  accent: '#ff6d00',
  isDark: false,
};

const themeDark = {
  shadow: 'rgba(255, 255, 255, 0.25)',
  bg: '#000000',
  caption: '#000000',
  textPrimary: '#e6e6e6',
  textSecondary: '#949494',
  accent: '#ff6d00',
  isDark: true,
};

export const useChangeTheme = () => {
  const [isDark, setIsDark] = useState(getAppInfoItemInStorage(LocalStorageKey.DarkTheme, false));
  const [currentTheme, setCurrentTheme] = useState(isDark ? themeDark : themeLight);
  
  const changeTheme = () => {
    setAppInfoItemInStorage(LocalStorageKey.DarkTheme, !isDark);
    setCurrentTheme(isDark ? themeLight : themeDark);
    setIsDark(!isDark);
  };
  
  return { changeTheme, currentTheme };
};
