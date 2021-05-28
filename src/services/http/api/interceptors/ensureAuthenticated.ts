import { AxiosError } from 'axios';
import { browserHistory } from '../../../history/browserHistory';

import { api } from '../index';

const ensureAuthenticated = async (
  errorResponse: AxiosError
): Promise<AxiosError> => {
  const statusCode = errorResponse.response?.status;

  const configResponse = errorResponse.response?.config;

  if (statusCode === 401 && configResponse) {
    try {
      const refreshToken = localStorage.getItem('@SCHEDULES:refresh_token');
      const {
        data: { token },
      } = await api.post(`/refresh-token/${refreshToken}`);

      localStorage.setItem('@SCHEDULES:token', token);

      api.defaults.headers.Authorization = `Bearer ${token}`;
      configResponse.headers.Authorization = `Bearer ${token}`;

      return api.request(configResponse);
    } catch (err) {
      browserHistory.push('/');
    }
  }

  return Promise.reject(errorResponse);
};

export { ensureAuthenticated };
