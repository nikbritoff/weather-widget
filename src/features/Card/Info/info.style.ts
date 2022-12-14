import styled from "@emotion/styled";

export const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  height: 100%;
  width: 100%;

  padding: 24px;

  background: 
  linear-gradient(324.84deg, rgba(239, 188, 56, 0.136) 14.05%, rgba(250, 186, 24, 0.2) 100%),
  linear-gradient(271.24deg, #FDD368 -4.18%, #F8B70F -4.17%, rgba(222, 194, 123, 0.6) 110.03%);
`;

export const StyledTemp = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-shadow: 0px 4px 4px ${props => props.theme.shadow};
  color: ${props => props.theme.caption};
  margin: 0;
  padding: 0;
`;

export const StyledCity = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 1px;
  color: ${props => props.theme.caption};
  text-transform: uppercase;
  margin: 0;
  margin-top: 15px;
`;
