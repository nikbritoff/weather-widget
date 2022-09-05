import styles from './Error.module.scss';

const Error = ({children}: {children: React.ReactNode}): JSX.Element => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Error;
