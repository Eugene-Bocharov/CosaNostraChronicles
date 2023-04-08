import React, { ReactNode } from 'react';

import styles from './ContainerBox.module.scss';

type ContainerBoxProps = {
  children: ReactNode;
};

export const ContainerBox: React.FC<ContainerBoxProps> = ({ children }) => {
  return (
    <React.Fragment>
      <div className={styles.container}>{children}</div>
    </React.Fragment>
  );
};
