import axios from 'axios';

import { putTokenOnRequest } from './interceptors/putTokenOnRequest';

const BASE_URL = 'http://localhost:3333';

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(putTokenOnRequest);

export { api };
