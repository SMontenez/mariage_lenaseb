import 'whatwg-fetch';
import restful, { fetchBackend } from 'restful.js';

import config from '../config';

const api = restful(`${config.api.baseUrl}/api`, fetchBackend(fetch));

export default api;
