import React, { useState } from 'react';
import styles from './MafiaCard.module.scss';

import { MafiaPage } from '../MafiaPage/MafiaPage';

import { MafiaCardProps } from '../../declarations/types/PropTypes';

export const MafiaCard: React.FC<MafiaCardProps> = ({
  imageUrl,
  cardId,
  name,
  description,
}) => {
  const [showMafiaPage, setShowMafiaPage] = useState(false);

  const handleClick = () => {
    setShowMafiaPage(true);
  };

  return (
    <React.Fragment>
      <div className={styles.CardBox}>
        <img
          className={styles.image}
          draggable="false"
          src={imageUrl}
          alt={name}
        />
        <div className={styles.hoverBox}>
          <button className={styles.hoverBoxButton} onClick={handleClick}>
            Read
          </button>
        </div>
      </div>
      {showMafiaPage && (
        <MafiaPage
          imageUrl={imageUrl}
          name={name}
          description={description}
          cardId={cardId}
          onClickFn={() => setShowMafiaPage(false)}
        />
      )}
    </React.Fragment>
  );
};
