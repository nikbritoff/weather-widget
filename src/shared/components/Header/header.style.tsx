import styled from '@emotion/styled';
import { FC } from 'react';
import { Link } from 'react-router-dom';

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

export const StyledLink = styled(StyledComponentLink)<StyledComponentLinkProps>`
  text-decoration: none;
  text-align: center;
  display: block;
  padding: 10px 20px;
  cursor: pointer;

  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: var(--colors-textPrimary);
  opacity: 0.7;

  border-bottom: 2px solid var(--colors-accent);
  ${props => props.active ? `` : `border-bottom: none`};
  
  &:hover {
    color: var(--colors-accent);
    opacity: 1;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNavList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;