import { ReactNode } from 'react';

export type ContainerBoxProps = {
  children: ReactNode;
};

export type MafiaCardProps = {
  imageUrl: string;
  cardId: string;
  name: string;
  description: string;
};

export type MafiaCardExtentedProps = {
  imageUrl: string;
  name: string;
  description: string;
};

export type MafiaPageProps = {
  cardId: string;
  imageUrl: string;
  description: string;
  name: string;
  onClickFn: () => void;
};
