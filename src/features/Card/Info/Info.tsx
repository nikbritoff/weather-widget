import { StyledContainer, StyledTemp, StyledCity } from './info.style';
import { convertKtoC } from './info.utils';

type InfoProps = {
  temp: number,
  city: string,
}

const Info = ({temp, city}: InfoProps): JSX.Element => {
  return (
    <StyledContainer>
      <StyledTemp>
        {convertKtoC(temp)}<sup>{'\u00b0'}</sup>
      </StyledTemp>
      <StyledCity>{city}</StyledCity>
    </StyledContainer>
  );
};

export default Info;
