import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import BarLoader from 'react-spinners/BarLoader';

const StyledContainer = styled.div`
  display: flex;
  background-color: inherit;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Loading = (): JSX.Element => {
  const theme = useTheme();

  return (
    <StyledContainer>
      <BarLoader color={theme.textPrimary} />
    </StyledContainer>
  );
}

export default Loading;
