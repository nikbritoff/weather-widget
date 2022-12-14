import { LocalStorageKey } from '../constants';


export const checkLocalStorage = (key: LocalStorageKey, init: any) => {
  const appInfo = localStorage.getItem('appInfo');
    
    if (appInfo) {
      const storage = JSON.parse(appInfo);

    return storage[key] !== undefined ? storage[key] : init;
  }
  
  return init;
};

export const setItemInLocalStorage = (key: LocalStorageKey, value: any): void => {
  const appInfo = localStorage.getItem('appInfo');
  const storage = appInfo ? JSON.parse(appInfo) : {};
  localStorage.setItem('appInfo', JSON.stringify({...storage, [key]: value}));
};
