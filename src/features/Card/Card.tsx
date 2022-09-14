import MockImage from '../../shared/assets/images/spb.jpg'
import Description from './Description/Description';
import { useEffect, useState } from 'react';
import { WeaterData } from '../../shared/types/api';
import Loading from '../../shared/components/Loading/Loading';
import Error from '../../shared/components/Error/Error';
import Info from './Info/Info';
import { LocationCoordinates } from '../../shared/types/locationCoordinates';
import { requestCurrentWeather } from '../../api/fetchCurrentWeather';
import { StyledCard, StyledImage, StyledImageContainer } from './card.style';

type CardProps = {
  location: LocationCoordinates | null,
  coordsError: boolean,
};

type CardState =
  { status: 'error', error: Error }
  | { status: 'loading' }
  | { status: 'success', data: WeaterData }
  | { status: 'idle' };

const CardError = ({ message }: { message : string }): JSX.Element => {
  return (
    <Error>
      <p>{message}</p>
    </Error>
  );
};

const CardContent = ({ main, name, weather }: WeaterData) => {
  return (
    <>
      <StyledImageContainer>
        <StyledImage src={MockImage} alt='City' width='243' />
        <Info temp={main.temp} city={name} />
      </StyledImageContainer>
      <Description weather={weather[0]} />
    </>
  );
};

const Card = ({ location, coordsError}: CardProps): JSX.Element => {
  const [ cardState, setCardState ] = useState<CardState>({ status: 'idle' });

  useEffect(() => {
    if (location) {
      requestCurrentWeather(location.lat, location.lon)
      .then(data => {
        setCardState({ status: 'success', data });
      })
      .catch((error) => setCardState({ status: 'error', error }));
    }

    return () => {
      setCardState({ status: 'idle' });
    }
  }, [location]);

  return (
    <StyledCard>
      {coordsError && <CardError message='Geolocation error' />}
      {(cardState.status === 'loading' || cardState.status === 'idle') && <Loading />}
      {cardState.status === 'error' && <CardError message={cardState.error.message} />}
      {cardState.status === 'success' && <CardContent {...cardState.data} />}
    </StyledCard>
  );
};

export default Card;
