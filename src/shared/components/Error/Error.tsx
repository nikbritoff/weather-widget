import styled from '@emotion/styled';

const StyledContainer = styled.div`
  display: flex;
  background-color: inherit;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.textPrimary}
`;

const Error = ({children}: {children: React.ReactNode}): JSX.Element => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
};

export default Error;
