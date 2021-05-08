import { AxiosError } from 'axios';
import { browserHistory } from '../../history/browserHistory';

const ensureAuthenticated = (
  errorResponse: AxiosError
): Promise<AxiosError> => {
  const statusCode = errorResponse.response?.status;

  if (statusCode === 401) {
    localStorage.removeItem('@SCHEDULES:user_id');
    localStorage.removeItem('@SCHEDULES:token');

    browserHistory.push('/');
  }

  return Promise.reject(errorResponse);
};

export { ensureAuthenticated };
