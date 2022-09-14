import styled from '@emotion/styled';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../features/Card/Card';
import { AppRoute } from '../../features/AppRouter/appRouter.constants';
import { useUserLocationContext } from '../../features/UserLocation/userLocation.hook';
// import { useUserLocationContext } from '../../context/userLocationContext';
import Caption from '../../shared/Caption/Caption';
import DefaultText from '../../shared/DefaultText/DefaultText';

interface StyledComponentLinkProps {
  className?: string;
  children: React.ReactNode;
  to: string;
}

const StyledComponentLink: FC<StyledComponentLinkProps> = ({
  className,
  children,
  to,
}) => <Link className={className} to={to}>{children}</Link>;

const StyledLink = styled(StyledComponentLink)<StyledComponentLinkProps>`
  text-decoration: underline;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  color: ${props => props.theme.textPrimary};
  
  &:hover {
    color: ${props => props.theme.accent};
  }
`;

const MyLocation = (): JSX.Element => {
  const {
    autoDetection,
    userLocation,
    coordsError,
  } = useUserLocationContext();

  return (
    <>
      <Caption>My location</Caption>
      {autoDetection || userLocation
      ? <Card coordsError={coordsError} location={userLocation}/>
      : <DefaultText>Please, select your position in <StyledLink to={`/${AppRoute.Settings}`}>settings</StyledLink></DefaultText>}
      
    </>
  );
};

export default MyLocation;
