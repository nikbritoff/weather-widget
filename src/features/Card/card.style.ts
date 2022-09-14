import styled from '@emotion/styled';

export const StyledCard = styled.div`
  width: 243px;
  height: 332px;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${props => props.theme.bg};
  box-shadow: 0px 8px 16px ${props => props.theme.shadow};
`;

export const StyledImageContainer = styled.div`
  position: relative;
  height: 239px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
