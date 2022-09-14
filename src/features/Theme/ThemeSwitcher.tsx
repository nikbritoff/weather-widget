import Toggle from '../../shared/components/Toggle/Toggle';
import { useTheme } from '@emotion/react';
import { StyledContainer, StyledButton } from './themeSwitcher.style';
import { useChangeTheme } from './theme.useChangeTheme';

const ThemeSwitcher = (): JSX.Element => {
  const { changeTheme } = useChangeTheme();
  const theme = useTheme();

  const handleChangeClick = () => {
    changeTheme();
    window.location.reload();
  };

  return (
    <StyledContainer>
      <StyledButton
        onClick={handleChangeClick}
      >
        <span className="visuallyHidden">Change theme</span>
      </StyledButton>
      <Toggle
        name="theme-switcher"
        isActive={theme.isDark}
        changeAction={handleChangeClick}
      />
    </StyledContainer>
  );
};

export default ThemeSwitcher;