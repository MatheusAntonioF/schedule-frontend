import { AxiosRequestConfig } from 'axios';

const putTokenOnRequest = (request: AxiosRequestConfig): AxiosRequestConfig => {
  const userToken = localStorage.getItem('@SCHEDULES:token');

  if (!userToken || request.headers.Authorization) return request;

  request.headers.Authorization = `Bearer ${userToken}`;

  return request;
};

export { putTokenOnRequest };
