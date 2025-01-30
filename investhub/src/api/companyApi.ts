const BaseURL = 'http://localhost:8000';
// Récupérer toutes les marques
const getCompanies = async () => {
  return fetch(BaseURL + '/companies', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json());
};

export const APICompany = {
  getCompanies,
};
