import { CITIES } from './citiesList.mock';
import { LocationCoordinates } from '../../shared/types/locationCoordinates';
import Select from 'react-select';

type CitiesListProps = {
  setCoordsError: (status: boolean) => void,
  setLocation: (coords: LocationCoordinates) => void,
  setGettingCoords: (status: boolean) => void,
  locationName: string,
  setLocationName: (name: string) => void,
};

const CitiesList = ({
    setGettingCoords,
    setCoordsError,
    setLocation,
    locationName,
    setLocationName,
  }: CitiesListProps): JSX.Element => {

    const options = Object.entries(CITIES).map((item: [string, LocationCoordinates]) => ({
        value: item[0],
        label: item[0],
      })
    );

    // const selectName = {
    //   value: locationName,
    //   label: locationName,
    // };
    const selectName = locationName.length > 0
      ? { value: locationName, label: locationName }
      : null;

  return (
    <>
    <Select
      defaultValue={selectName}
      placeholder='Please select city'
      options={options}
      onChange={(option) => {
        setGettingCoords(false);
        setCoordsError(false);

        if (option?.value) {
          setLocation(CITIES[option.value]);
          setLocationName(option.value)
        }
      }}      

      // Не работает подобный вариант
      // Непонятная ршибка в onChange - styles импортируется из citiesList.style.ts
      // styles={styles}
      styles={
        {
          control: (provided) => ({
            ...provided,
            width: '243px',
            borderRadius: '16px',
            backgroundColor: 'var(--colors-bg)',
            boxShadow: '0px 8px 16px var(--colors-shadow)',
            marginTop: '20px',          
            opacity: '0.7',
            padding: '5px 10px',
          }),
          singleValue: (provided) => ({
            ...provided,
            fontWeight: 700,
            fontSize: '15px',
            lineHeight: '20px',
            color: 'var(--colors-textPrimary)',
          }),
          input: (provided) => ({
            ...provided,
            fontWeight: 700,
            fontSize: '15px',
            lineHeight: '20px',
            color: 'var(--colors-textPrimary)',
          }),
          menuList: (provided) => ({
            ...provided,
            fontWeight: 700,
            fontSize: '15px',
            lineHeight: '20px',
            color: 'var(--colors-caption)',
            backgroundColor: 'var(--colors-textSecondary)',
          }),
          option: (styles, {isSelected}) => ({
            ...styles,
            backgroundColor: isSelected 
              ? 'var(--colors-accent)'
              : 'var(--colors-textPrimary)',
            cursor: 'pointer',
            ':active': {
              backgroundColor: 'var(--colors-textPrimary)',
            }
          })
        }
      }
    />
    </>
  );
};

export default CitiesList;
