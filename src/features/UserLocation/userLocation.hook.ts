import { useContext } from 'react';
import { userLocationContext } from './userLocation.context';

export const useUserLocationContext = () => {
  const context = useContext(userLocationContext);

  return context;
};
