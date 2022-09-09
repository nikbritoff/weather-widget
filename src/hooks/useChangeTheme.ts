import { useState } from 'react';
import { LocalStorageKey } from '../const';
import { checkLocalStorage, setItemInLocalStorage } from '../utils/localStorage';

const light = {
  shadow: 'rgba(0, 0, 0, 0.25)',
  bg: '#ffffff',
  caption: '#ffffff',
  textPrimary: '#191919',
  textSecondary: '#6B6B6B',
  accent: '#ff6d00',
};

const dark = {
  shadow: 'rgba(255, 255, 255, 0.25)',
  bg: '#000000',
  caption: '#000000',
  textPrimary: '#e6e6e6',
  textSecondary: '#949494',
  accent: '#ff6d00',
};

export const useChangeTheme = () => {
  const [isDark, setIsDark] = useState(checkLocalStorage(LocalStorageKey.DarkTheme, false));
  const [currentTheme, setCurrentTheme] = useState(checkLocalStorage(LocalStorageKey.CurrentTheme, light));
  
  const changeTheme = () => {
    setItemInLocalStorage(LocalStorageKey.CurrentTheme, isDark ? light : dark);
    setItemInLocalStorage(LocalStorageKey.DarkTheme, !isDark);
    setCurrentTheme(isDark ? light : dark);
    setIsDark(!isDark);
  };
  
  return { isDark, changeTheme, currentTheme};
};
