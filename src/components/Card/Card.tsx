import styled from '@emotion/styled';
import MockImage from '../../assets/spb.jpg'
import Description from './Description/Description';
import { useEffect, useState } from 'react';
import { WeaterData } from '../../types/api';
import Loading from '../../shared/Loading/Loading';
import Error from '../../shared/Error/Error';
import Info from './Info/Info';
import { LocationCoordinates } from '../../types/locationCoordinates';
import { requestCurrentWeather } from '../../api/fetchCurrentWeather';

type CardProps = {
  location: LocationCoordinates | null,
  coordsError: boolean,
};

type CardState =
  { status: 'error', error: Error }
  | { status: 'loading' }
  | { status: 'success', data: WeaterData }
  | { status: 'idle' };

const StyledCard = styled.div`
  width: 243px;
  height: 332px;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${props => props.theme.bg};
  box-shadow: 0px 8px 16px ${props => props.theme.shadow};
`;

const StyledImageContainer = styled.div`
  position: relative;
  height: 239px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

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
