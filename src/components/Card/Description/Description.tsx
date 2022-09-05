/** @jsxImportSource @emotion/react */

import { css, useTheme } from '@emotion/react';

import { Weather } from '../../../types/api';
import { getDate } from '../../../utils/date';
import styles from './Description.module.scss';

type DescriptionProps = {
  weather: Weather,
}

const Description = ({weather}: DescriptionProps): JSX.Element => {
  const theme = useTheme();

  const {description, icon} = weather;

  const bgStyle = css({
    backgroundColor: theme.bg,
  });

  const dateStyle = css({
    color: theme.textPrimary,
  });

  const descriptionStyle = css({
    color: theme.textSecondary,
  });

  return (
    <div className={styles.infoWrapper} css={bgStyle}>
      <p className={styles.date} css={dateStyle}>{getDate()}</p>
      <div className={styles.description}>
        <p className={styles.descriptionText} css={descriptionStyle}>{description}</p>
        <div className={styles.descriptionIcon}>
          <img
            className={styles.image}
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            width='30'
            alt='Weather'
          /> 
        </div>
      </div>
    </div>
  );
};

export default Description;
