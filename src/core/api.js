import 'whatwg-fetch';
import restful, { fetchBackend } from 'restful.js';

import config from '../config';

console.log('AAAAAAA', config.api.baseUrl);
const api = restful(`${config.api.baseUrl}/api`, fetchBackend(fetch));

export default api;
