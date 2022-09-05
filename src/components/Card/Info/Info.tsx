/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';

import { convertKtoC } from '../../../utils/temperature';
import styles from './Info.module.scss';

type InfoProps = {
  temp: number,
  city: string,
}

const Info = ({temp, city}: InfoProps): JSX.Element => {
  const theme = useTheme();

  const tempStyle = css({
    textShadow: `0px 4px 4px ${theme.shadow}`,
    color: theme.caption,
  });
  
  const cityStyle = css({
    color: theme.caption,
  });

  return (
    <div className={styles.tempInfo}>
      <p className={styles.temp} css={tempStyle}>
        {convertKtoC(temp)}
        <sup className={styles.tempIcon}>{'\u00b0'}</sup>
      </p>
      <p className={styles.city} css={cityStyle}>{city}</p>
    </div>
  );
};

export default Info;
