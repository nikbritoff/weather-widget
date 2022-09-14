import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../../features/AppRouter/appRouter.constants';
import ThemeSwitcher from '../../../features/Theme/ThemeSwitcher';
import { StyledHeader, StyledNavList, StyledLink } from './header.style';

const Header = (): JSX.Element => {
  const location = useLocation();
  const currentPath = location.pathname.length > 1 ? location.pathname.slice(1) : location.pathname;

  return (
    <StyledHeader>
          <StyledNavList>
              <li>
                <StyledLink
                  to={AppRoute.WorldWeather}
                  active={currentPath === AppRoute.WorldWeather}
                >
                  World weather
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  to={AppRoute.MyLocation}
                  active={currentPath === AppRoute.MyLocation}
                >
                  My location
                </StyledLink>
              </li>
              <li>
                <StyledLink
                  to={AppRoute.Settings}
                  active={currentPath === AppRoute.Settings}
                >
                  Settings
                </StyledLink>
              </li>
          </StyledNavList>
          <ThemeSwitcher />
        </StyledHeader>
  );
};

export default Header;
