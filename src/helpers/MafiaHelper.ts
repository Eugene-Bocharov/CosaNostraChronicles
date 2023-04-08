import axios from 'axios';

const port = 5000;
const baseUrl = `http://localhost:${port}/api/v1/`;

export const GetAllMafias = () => {
  return axios
    .get(`${baseUrl}/mafias/all`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

type GetMafiaByIdProps = {
  cardId: string;
};

export const GetMafiaById = ({ cardId }: GetMafiaByIdProps) => {
  return axios
    .get(`${baseUrl}/mafias/${cardId}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
export const GetThreeMafias = () => {
  return axios
    .get(`${baseUrl}/mafias/topthree`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
