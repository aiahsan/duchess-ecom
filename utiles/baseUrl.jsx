import { create } from 'apisauce';
export const api = create({
  baseURL: 'https://ecomali.herokuapp.com/api/v1/',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  },
});
