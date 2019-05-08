const BASE_URL = "https://api.discogs.com";
const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;

const completeUrl = (path, params = {}) => {
  let url = new URL(`${BASE_URL}${path}`);

  Object.keys(params).forEach(param => {
    url.searchParams.set(param, params[param]);
  });

  return url;
};

const makeFetchOptions = () => {
  const fetchOptions = {
    headers: {
      Authorization: `Discogs token=${AUTH_TOKEN}`
    }
  };

  return fetchOptions;
};

export const makeFetch = async (path, opts = {}) => {
  const url = completeUrl(path, opts.query);
  const fetchOptions = makeFetchOptions();
  const resp = await fetch(url, fetchOptions);
  if (resp.ok) return resp.json();
  const err = resp.statusText;
  throw new Error(err);
};
