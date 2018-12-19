// eslint-disable-next-line import/no-named-as-default
import api from '../api';

export async function send(data) {
  const { body } = await api.custom('email/send').post(data);
  return body().data();
}
