export const ALL_COUNTRIES = REACT_APP_BASE_URL + 'all';

export const searchByCountry = (name) => REACT_APP_BASE_URL + 'name/' + name;

export const filterByCode = (codes) =>
  REACT_APP_BASE_URL + 'alpha?codes=' + codes.join(',');
