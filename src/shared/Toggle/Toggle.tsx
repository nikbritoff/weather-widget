/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';
import styles from './Toggle.module.scss';
import cn from 'classnames';

type ToggleProps = {
  name: string;
  isActive: boolean;
  changeAction: () => void;
};

const Toggle = ({ name, isActive, changeAction }: ToggleProps): JSX.Element => {
  const theme = useTheme();

  const labelStyle = css({
    backgroundColor: theme.textSecondary,
    
    '&::before': {
      backgroundColor: theme.caption,
    }
  });

  return (
    <>
      <input
        className={cn('visuallyHidden', styles.input)}
        type="checkbox"
        name={name}
        id={name}
        checked={isActive}
        onChange={changeAction}
      ></input>
      <label className={styles.label} css={labelStyle} htmlFor={name}></label>
    </>
  );
};

export default Toggle;