import { Outlet } from 'react-router-dom';
import Header from '../shared/components/Header/Header';
import { StyledContent, StyledPageContainer } from './mainLayout.style';

const MainLayout = (): JSX.Element => {
  return (
    <StyledPageContainer>  
      <Header />
      <StyledContent>
        <Outlet/>
      </StyledContent>
    </StyledPageContainer>
    );
};

export default MainLayout;
