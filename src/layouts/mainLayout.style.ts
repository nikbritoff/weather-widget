import styled from '@emotion/styled';

export const StyledPageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.bg};
`;

export const StyledContent = styled.div`
  padding-top: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;