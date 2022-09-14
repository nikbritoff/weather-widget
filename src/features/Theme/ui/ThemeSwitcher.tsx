import ImageEyeClose from '../../../shared/assets/images/icons/eye-close.svg';
import ImageEyeOpen from '../../../shared/assets/images/icons/eye-open.svg';
import styled from '@emotion/styled';
import Toggle from '../../../shared/Toggle/Toggle';
import { useTheme } from '@emotion/react';

type ThemeSwitcherProps = {
  changeTheme: () => void,
};

const StyledContainer = styled.div`
  height: 24px;
  display: flex;
  position: fixed;
  top: 28px;
  right: 80px;
`;

const StyledButton = styled.button`
width: 24px;
height: 24px;
border-radius: 50%;
border-style: none;
margin-right: 5px;
background-color: ${props => props.theme.isDark ? props.theme.accent : props.theme.textSecondary};
display: flex;
justify-content: center;
align-items: center;
background-position: center;
background-repeat: no-repeat;
cursor: pointer;

background-image: url(${props => props.theme.isDark ? ImageEyeClose : ImageEyeOpen});
background-size: 16px ${props => props.theme.isDark ? '8px' : '12px'};
`;

const ThemeSwitcher = ({ changeTheme } : ThemeSwitcherProps): JSX.Element => {
  const theme = useTheme();

  return (
    <StyledContainer>
      <StyledButton
        onClick={changeTheme}
      >
        <span className="visuallyHidden">Change theme</span>
      </StyledButton>
      <Toggle
        name="theme-switcher"
        isActive={theme.isDark}
        changeAction={changeTheme}
      />
    </StyledContainer>
  );
};

export default ThemeSwitcher;