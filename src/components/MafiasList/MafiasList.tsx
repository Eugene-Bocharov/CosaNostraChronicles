import React, { useState, useEffect } from 'react';
import { GetAllMafias } from '../../helpers/MafiaHelper';
import { MafiaCard } from '../MafiaCard/MafiaCard';
import { v4 as uuidv4 } from 'uuid';
import styles from './MafiasList.module.scss';

interface Mafia {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
}

export const MafiasList: React.FC = () => {
  const [allMafiasList, setAllMafiasList] = useState<Mafia[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const allMafiasListDataRes = await GetAllMafias();
      setAllMafiasList(allMafiasListDataRes);
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <ul className={styles.listUl}>
        {allMafiasList.map((item) => {
          return (
            <MafiaCard
              cardId={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              description={item.description}
              key={uuidv4()}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
};
