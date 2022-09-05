/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import cn from 'classnames';
import Toggle from '../../shared/Toggle/Toggle';
import styles from './ThemeSwitcher.module.scss';

type ThemeSwitcherProps = {
  isDark: boolean,
  changeTheme: () => void,
};

const ThemeSwitcher = ({ isDark, changeTheme } : ThemeSwitcherProps): JSX.Element => {
  const theme = useTheme();

  const buttonStyle = css({    
    backgroundColor: theme.textSecondary,
  });

  return (
    <div className={styles.switcherWrapper}>
      <button
        className={cn(
          styles.themeButton,
          isDark ? styles.themeButtonDark : styles.themeButtonLight,
        )}
        css={buttonStyle}
        onClick={changeTheme}
      >
        <span className="visuallyHidden">Change theme</span>
      </button>
      <Toggle
        name="theme-switcher"
        isActive={isDark}
        changeAction={changeTheme}
      />
    </div>
  );
};

export default ThemeSwitcher;