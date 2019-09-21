import 'whatwg-fetch';
import restful, { fetchBackend } from 'restful.js';

import config from '../config';

export default restful(`${config.api.baseUrl}/api`, fetchBackend(fetch));
