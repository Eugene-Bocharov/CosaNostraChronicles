import React from 'react';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <React.Fragment>
      <div className={styles.headerBox}>
        <h1 className={styles.title}>American Gangsters</h1>
        <a href="" className={styles.link}>
          Check this out
        </a>
      </div>
    </React.Fragment>
  );
};
