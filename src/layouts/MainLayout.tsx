
import { css, Global } from '@emotion/react/macro';
import { Outlet } from 'react-router-dom';
import Header from '../shared/components/Header/Header';
import { StyledContent, StyledPageContainer } from './mainLayout.style';

const MainLayout = (): JSX.Element => {
  return (
    <StyledPageContainer>
      <Global styles={css`
      .visuallyHidden {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        clip: rect(0 0 0 0);
      }`} />

      <Header />
      <StyledContent>
        <Outlet/>
      </StyledContent>
    </StyledPageContainer>
    );
};

export default MainLayout;
