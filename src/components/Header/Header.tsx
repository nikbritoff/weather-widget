import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

const StyledHeader = styled.header`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const StyledNavLink = styled.span`
  display: block;
  border: none;
  border-radius: 16px;
  padding: 10px;
  cursor: pointer;

  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  color: ${props => props.theme.caption};
  background-color: ${props => props.theme.textSecondary};
  opacity: 0.7;
`;

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
          <StyledNavList>
              <li>
              <Link to={AppRoute.WorldWeather}>
                <StyledNavLink>World</StyledNavLink>
              </Link>
              </li>
              <li>
              <Link to={AppRoute.MyLocation}>
                <StyledNavLink>My location</StyledNavLink>
              </Link>
              </li>
              <li>
              <Link to={AppRoute.Settings}>
                <StyledNavLink>Settings</StyledNavLink>
              </Link>
              </li>
          </StyledNavList>
        </StyledHeader>
  );
};

export default Header;
