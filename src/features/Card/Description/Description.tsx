import styled from '@emotion/styled';
import { getDate } from './description.utils';
import { Weather } from '../../../shared/types/api';

type DescriptionProps = {
  weather: Weather,
}

const StyledContainer = styled.div`
  min-height: 93px;
  background-color: ${props => props.theme.bg};
  padding: 16px 20px 17px 16px;
`;

const StyledDate = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: ${props => props.theme.textPrimary};
  opacity: 0.7;
  margin: 0;
`;

const StyledDescriptionWrapper = styled.div`
  display: flex;
`;

const StyledDescriptionText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.theme.textSecondary};
  opacity: 0.4;
  margin: 0;
  margin-top: 6px;

  & span:first-of-type {
    text-transform: capitalize;
  }
`;

const StyledIconContainer = styled.div`
  width: 30px;
  height: 30px;
  margin-left: auto;
`;

const StyledIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

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
