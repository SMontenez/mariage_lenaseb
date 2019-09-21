// eslint-disable-next-line import/no-named-as-default
import api from '../api';

export async function heartbeat() {
  await api.custom('heartbeat').get();
}
