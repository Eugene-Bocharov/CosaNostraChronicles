import React, { useState, useEffect } from 'react';
import styles from './MafiaPage.module.scss';

import { GetMafiaById } from '../../helpers/MafiaHelper';

import { Mafia } from '../../declarations/interfaces/Mafia';
import { MafiaPageProps } from '../../declarations/types/PropTypes';

export const MafiaPage: React.FC<MafiaPageProps> = ({
  cardId,
  description,
  imageUrl,
  name,
  onClickFn,
}) => {
  const [mafiaInfo, setMafiaInfo] = useState<Mafia | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const MafiaInfoRes = await GetMafiaById({ cardId });

      setMafiaInfo(MafiaInfoRes);
    };

    fetchData();
  }, []);
  console.log(mafiaInfo);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <React.Fragment>
      <div className={styles.pageBox}>
        <button onClick={onClickFn} className={styles.backButton}>
          Back
        </button>
        <div className={styles.container}>
          <img
            className={styles.image}
            draggable="false"
            src={imageUrl}
            alt={name}
          />
          <div className={styles.textInfoDivider}>
            <h5 className={styles.name}>{name}</h5>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
