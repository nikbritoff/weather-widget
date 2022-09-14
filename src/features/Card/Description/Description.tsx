import { getDate } from './description.utils';
import { Weather } from '../../../shared/types/api';
import { StyledContainer, StyledDate, StyledDescriptionWrapper, StyledDescriptionText, StyledIconContainer, StyledIcon } from './description.style';

type DescriptionProps = {
  weather: Weather,
}

const Description = ({weather}: DescriptionProps): JSX.Element => {
  const {description, icon} = weather;

  return (
    <StyledContainer>
      <StyledDate>{getDate()}</StyledDate>
      <StyledDescriptionWrapper>
        <StyledDescriptionText><span>{description}</span></StyledDescriptionText>
          <StyledIconContainer>
            <StyledIcon
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              width='30'
              alt='Weather'
            />
          </StyledIconContainer>
        </StyledDescriptionWrapper>
    </StyledContainer>
  );
};

export default Description;
