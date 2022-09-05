import { useState } from 'react';

const light = {
  shadow: 'rgba(0, 0, 0, 0.25)',
  bg: '#ffffff',
  caption: '#ffffff',
  textPrimary: '#191919',
  textSecondary: '#6B6B6B',
};

const dark = {
  shadow: 'rgba(255, 255, 255, 0.25)',
  bg: '#000000',
  caption: '#000000',
  textPrimary: '#e6e6e6',
  textSecondary: '#949494',
};

export const useChangeTheme = () => {
  const [isDark, setIsDark] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(light);
  
  const changeTheme = () => {
    setCurrentTheme(isDark ? light : dark);
    setIsDark(!isDark);
  };
  
  return { isDark, changeTheme, currentTheme};
};
