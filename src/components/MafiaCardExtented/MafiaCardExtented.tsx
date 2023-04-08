import React from 'react';
import styles from './MafiaCardExtented.module.scss';

type MafiaCardExtented = {
  imageUrl: string;
  name: string;
  description: string;
};

export const MafiaCardExtented: React.FC<MafiaCardExtented> = ({
  imageUrl,
  name,
  description,
}) => {
  return (
    <React.Fragment>
      <div className={styles.CardBox}>
        <img
          className={styles.image}
          draggable="false"
          src={imageUrl}
          alt={name}
        />
        <h5 className={styles.name}>{name}</h5>
        <p className={styles.description}>{description}</p>
      </div>
    </React.Fragment>
  );
};
