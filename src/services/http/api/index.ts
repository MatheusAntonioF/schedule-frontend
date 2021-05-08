import axios from 'axios';
import { ensureAuthenticated } from './interceptors/ensureAuthenticated';

import { putTokenOnRequest } from './interceptors/putTokenOnRequest';

const BASE_URL = 'http://localhost:3333';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.response.use(response => response, ensureAuthenticated);
api.interceptors.request.use(putTokenOnRequest);

export { api };
