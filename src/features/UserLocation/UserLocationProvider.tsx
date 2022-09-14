import { useState, useEffect } from 'react';
import { CITIES } from '../CitiesList/citiesList.mock';
import { LocalStorageKey } from '../../shared/constants';
import { LocationCoordinates } from '../../shared/types/locationCoordinates';
import { userLocationContext } from './userLocation.context';
import { checkLocalStorage, setItemInLocalStorage } from './userLocation.utils';

type UserLocationContextProviderProps = {
  children: React.ReactNode,
};

const initialState = {
  autoDetection: true,
  userLocation: null,
  gettingCoords: true,
  coordsError: false,
  worldLocation: CITIES.Miami,
};

export const UserLocationProvider: React.FC<UserLocationContextProviderProps> = (
  { children }: UserLocationContextProviderProps) => {
  const [ autoDetection, setAutoDetection ] = useState<boolean>(checkLocalStorage(
    LocalStorageKey.AutoDetection, initialState.autoDetection));
  const [ userLocation, setUserLocation ] = useState<null | LocationCoordinates>(initialState.userLocation);
  const [ gettingCoords, setGettingCoords ] = useState<boolean>(initialState.gettingCoords);
  const [ coordsError, setCoordsError ] = useState<boolean>(initialState.coordsError);
  const [ worldLocation, setWorldLocation ] = useState<LocationCoordinates>(initialState.worldLocation);

  const changeAutoDetection = (status: boolean) => {
    setAutoDetection(status);
    setItemInLocalStorage(LocalStorageKey.AutoDetection, status);
  };

  useEffect(() => {
    if (!autoDetection && !gettingCoords) {
    return;
    }

    const geo = navigator.geolocation;

    const onChange: PositionCallback = ({coords: {latitude: lat, longitude: lon}}) => {
      if (autoDetection && gettingCoords) {
        setUserLocation({lat: String(lat), lon: String(lon)});
      }

      setGettingCoords(false);
      setCoordsError(false);
    };

    const onError = () => {
      setCoordsError(true);
      setAutoDetection(false);
      setUserLocation(CITIES.SPB);      
      setGettingCoords(false);
    };

    if (!geo) {
      setGettingCoords(false);
      setCoordsError(true);
      setAutoDetection(false);
      return;
    }


    const watcher = geo.watchPosition(
      onChange,
      onError,
    );
  
    return () => geo.clearWatch(watcher);
  }, [autoDetection, gettingCoords, userLocation]);

  return (
    <userLocationContext.Provider value={{
      autoDetection,
      changeAutoDetection,
      userLocation,
      setUserLocation,
      gettingCoords,
      setGettingCoords,
      coordsError,
      setCoordsError,
      worldLocation,
      setWorldLocation,
    }}>
      {children}
    </userLocationContext.Provider>
  );
};
