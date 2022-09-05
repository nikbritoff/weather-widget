import BarLoader from 'react-spinners/BarLoader';
import styles from './Loading.module.scss';

const Loading = (): JSX.Element => {
  return (
    <div className={styles.loading}>
      <BarLoader color='#191919' />
    </div>
      
  );
}

export default Loading;
