import { createContext, useState, useContext, useEffect } from 'react';
import { CITIES, LocalStorageKey } from '../const';
import { LocationCoordinates } from '../types/locationCoordinates';
import { checkLocalStorage, setItemInLocalStorage } from '../utils/localStorage';

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

type LocationContextProviderProps = {
  children: React.ReactNode,
};

const initialState = {
  autoDetection: true,
  userLocation: null,
  gettingCoords: true,
  coordsError: false,
  worldLocation: CITIES.Miami,
};

const locationContext = createContext<locationContextType>({} as locationContextType);

export const LocationContextProvider: React.FC<LocationContextProviderProps> = ({ children }: LocationContextProviderProps) => {
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
    <locationContext.Provider value={{
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
    </locationContext.Provider>
  );
};

export const useUserLocationContext = () => {
  const context = useContext(locationContext);

  return context;
};
