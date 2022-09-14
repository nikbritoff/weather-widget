import { createContext } from 'react';
import { LocationCoordinates } from '../../shared/types/locationCoordinates';

type locationContextType = {
  autoDetection: boolean,
  changeAutoDetection: (value: boolean) => void,
  userLocation: null | LocationCoordinates,
  setUserLocation: (value: LocationCoordinates | null) => void,
  gettingCoords: boolean,
  setGettingCoords: (value: boolean) => void,
  coordsError: boolean,
  setCoordsError: (value: boolean) => void,
  worldLocation: LocationCoordinates,
  setWorldLocation: (value: LocationCoordinates) => void,
};

export const userLocationContext = createContext<locationContextType>({} as locationContextType);


