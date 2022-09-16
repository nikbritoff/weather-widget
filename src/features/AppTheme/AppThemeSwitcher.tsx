import Toggle from '../../shared/components/Toggle/Toggle';
import { useTheme } from '@emotion/react';
import { StyledContainer, StyledButton, StyledButtonText } from './appThemeSwitcher.style';
import { useChangeTheme } from './useChangeTheme';

const AppThemeSwitcher = (): JSX.Element => {
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
        <StyledButtonText>Change theme</StyledButtonText>
      </StyledButton>
      <Toggle
        name="theme-switcher"
        isActive={theme.isDark}
        changeAction={handleChangeClick}
      />
    </StyledContainer>
  );
};

export default AppThemeSwitcher;