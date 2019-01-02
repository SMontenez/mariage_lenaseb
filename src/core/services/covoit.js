// eslint-disable-next-line import/no-named-as-default
import api from '../api';

export async function getProposals() {
  const { body } = await api.custom('covoit/proposal').get();
  return body().data();
}

export async function getRequests() {
  const { body } = await api.custom('covoit/request').get();
  return body().data();
}

export async function create(data) {
  await api.custom('covoit').post(data);
}
