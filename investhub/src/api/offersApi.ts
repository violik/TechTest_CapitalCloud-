const BaseURL = 'http://localhost:8000';
// Récupérer toutes les marques
const getAvailableOffers = () => {
  return fetch(BaseURL + '/offers', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json());
};

const getMyOffers = async (userId: string) => {
  return fetch(BaseURL + '/offers/' + userId, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json());
};

interface offreApi extends Partial<Offre> {}
const addOffer = async (data: offreApi) => {
  const tosend = JSON.stringify(data);
  console.log(tosend);
  return fetch(BaseURL + '/offer', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(response => response.json());
};

const modifyOffer = async (offerId: number | string, status: string) => {
  // TODO handle all changes
  return fetch(BaseURL + '/offer/' + offerId, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(status),
  }).then(response => response.json());
};

export const APIOffers = {
  getAvailableOffers,
  getMyOffers,
  addOffer,
};
