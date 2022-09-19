import { useState } from 'react';
import { LocalStorageKey } from '../../shared/constants';
import { getAppInfoItemInStorage, setAppInfoItemInStorage } from '../../shared/utils/storage';
import { ThemeVariant } from './appTheme.constants';

export const useChangeTheme = () => {
  const [themeVariat, setThemeVariat] = useState<ThemeVariant>(getAppInfoItemInStorage(LocalStorageKey.ThemeVariant, ThemeVariant.Light));
  
  const changeTheme = () => {
    setThemeVariat(themeVariat === ThemeVariant.Dark ? ThemeVariant.Light : ThemeVariant.Dark);
    setAppInfoItemInStorage(LocalStorageKey.ThemeVariant, themeVariat === ThemeVariant.Dark ? ThemeVariant.Light : ThemeVariant.Dark);
  };
  
  return { changeTheme, themeVariat };
};
