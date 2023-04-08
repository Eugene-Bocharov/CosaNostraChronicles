import axios from 'axios';
import { GetMafiaByIdProps } from '../declarations/types/HelperProps';

const port = 5000;
const baseUrl = `http://localhost:${port}/api/v1/`; // my local rest api

export const GetAllMafias = () => {
  return axios
    .get(`${baseUrl}/mafias/all`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
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
