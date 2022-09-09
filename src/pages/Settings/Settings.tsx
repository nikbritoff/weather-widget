import styled from '@emotion/styled';
import CitiesList from '../../components/CitiesList/CitiesList';
import { useUserLocationContext } from '../../context/userLocationContext';
import Caption from '../../shared/Caption/Caption';
import Toggle from '../../shared/Toggle/Toggle';

const StyledLabel = styled.label`
padding: 0 20px;
cursor: pointer;
user-select: none;
font-weight: 700;
font-size: 18px;
line-height: 20px;
color: ${props => props.theme.textPrimary};
opacity: 0.7;
`;

const Container = styled.div`
  display: flex;
`;


const Settings = (): JSX.Element => {
  const {
    autoDetection,
    changeAutoDetection,
    setUserLocation,
    setGettingCoords,
    setCoordsError,
    userLocation,
  } = useUserLocationContext();

  return (
    <>
      <Caption>Settings</Caption>
      <Container>

      <StyledLabel>
        My location: Auto detected
        <input
          type='checkbox'
          checked={autoDetection}
          className='visuallyHidden'
          onChange={() => {
            changeAutoDetection(!autoDetection);
            setGettingCoords(true);
          }}
          />
      </StyledLabel>
      <Toggle name='auto-detection' isActive={autoDetection} changeAction={() => changeAutoDetection(!autoDetection)}></Toggle>
      </Container>
      {!autoDetection &&
        <CitiesList 
          setLocation={setUserLocation}
          setCoordsError={setCoordsError}
          setGettingCoords={setGettingCoords}
          currentLocation={userLocation}
        />
      }
    </>
  );
};

export default Settings;
