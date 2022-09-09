import ImageEyeClose from '../../assets/icons/eye-close.svg';
import ImageEyeOpen from '../../assets/icons/eye-open.svg';
import styled from '@emotion/styled';
import Toggle from '../../shared/Toggle/Toggle';

type ThemeSwitcherProps = {
  isDark: boolean,
  changeTheme: () => void,
};

const StyledContainer = styled.div`
  height: 24px;
  display: flex;
  position: fixed;
  top: 28px;
  right: 80px;
`;

const ThemeSwitcher = ({ isDark, changeTheme } : ThemeSwitcherProps): JSX.Element => {
  const StyledButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border-style: none;
  margin-right: 5px;
  background-color: ${props => isDark ? props.theme.accent : props.theme.textSecondary};
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  background-image: url(${isDark ? ImageEyeClose : ImageEyeOpen});
  background-size: 16px ${isDark ? '8px' : '12px'};
`;
  return (
    <StyledContainer>
      <StyledButton
        onClick={changeTheme}
      >
        <span className="visuallyHidden">Change theme</span>
      </StyledButton>
      <Toggle
        name="theme-switcher"
        isActive={isDark}
        changeAction={changeTheme}
      />
    </StyledContainer>
  );
};

export default ThemeSwitcher;