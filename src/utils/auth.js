const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://around-vercel-backend.vercel.app/'
    : 'http://localhost:3000';

// const BASE_URL =
// process.env.NODE_ENV === 'production'
// ? 'https://nitzan-smulevici.art'
// : 'http://localhost:3000';

const handleResponse = (res) =>
  res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
};

export const checkUserToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
};
