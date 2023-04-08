import React, { useState, useEffect } from 'react';
import styles from './TopThreeMafias.module.scss';
import { GetThreeMafias } from '../../helpers/MafiaHelper';

import { MafiaCardExtented } from '../MafiaCardExtented/MafiaCardExtented';

interface Mafia {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
}

export const TopThreeMafias: React.FC = () => {
  const [topThreeMafiasList, setTopThreeMafiasList] = useState<Mafia[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const topThreeMafiasListData = await GetThreeMafias();
      setTopThreeMafiasList(topThreeMafiasListData);
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <ul className={styles.listUl}>
        {topThreeMafiasList.map((item) => {
          return (
            <MafiaCardExtented
              key={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              description={item.description}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
};
