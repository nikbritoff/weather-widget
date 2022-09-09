import styled from '@emotion/styled';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';

interface StyledComponentLinkProps {
  className?: string;
  children: React.ReactNode;
  to: string;
  active?: boolean,
}

const StyledComponentLink: FC<StyledComponentLinkProps> = ({
  className,
  children,
  to,
}) => <Link className={className} to={to}>{children}</Link>;

const StyledLink = styled(StyledComponentLink)<StyledComponentLinkProps>`
  text-decoration: none;
  text-align: center;
  display: block;
  padding: 10px 20px;
  cursor: pointer;

  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: ${props => props.theme.textPrimary};
  opacity: 0.7;

  border-bottom: 2px solid ${props => props.theme.accent};
  ${props => props.active ? `` : `border-bottom: none`};
  
  &:hover {
    color: ${props => props.theme.accent};
    opacity: 1;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNavList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Header = (): JSX.Element => {
  const location = useLocation();
  const currentPath = location.pathname.slice(1);
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
        </StyledHeader>
  );
};

export default Header;
