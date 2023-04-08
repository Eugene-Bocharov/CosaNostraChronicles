import React from 'react';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <div className={styles.footerBox}>
        <p className={styles.devName}>Eugene Bocharov</p>
        <p className={styles.devTelegramLink}>t.me/Eugene_Bocharov</p>
        <p className={styles.devNumber}>+ 380 50 598 8220</p>
      </div>
    </React.Fragment>
  );
};
