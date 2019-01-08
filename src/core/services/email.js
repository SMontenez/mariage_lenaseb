// eslint-disable-next-line import/no-named-as-default
import api from '../api';

export async function sendContactEmail(data) {
  const { body } = await api.custom('email/send/contact').post(data);
  return body().data();
}

export async function sendPresenceEmail(data) {
  const { body } = await api.custom('email/send/presence').post(data);
  return body().data();
}
