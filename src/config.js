export const ALL_COUNTRIES =
  process.env.REACT_APP_BASE_URL +
  'all?fields=name,capital,flags,population,region';

export const searchByCountry = (name) =>
  process.env.REACT_APP_BASE_URL + 'name/' + name;

export const filterByCode = (codes) =>
  process.env.REACT_APP_BASE_URL + 'alpha?codes=' + codes.join(',');
