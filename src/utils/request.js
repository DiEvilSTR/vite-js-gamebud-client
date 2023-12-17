import { baseApiEndpoint } from '/src/constants';

export const HTTP_CONTENT_TYPE = {
  json: 'application/json',
  form: 'application/x-www-form-urlencoded',
  multipart: 'multipart/form-data',
};

export const HTTP_METHOD = {
  get: 'GET',
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
  patch: 'PATCH',
};

export function request({ contentType: _contentType, url: _url, headers: _headers, method: _method, ...options }) {
  const contentType = _contentType || HTTP_CONTENT_TYPE.json;
  const headers = {
    'Content-Type': contentType,

    ...(_headers || {}),
  };
  const url = _url ? `${baseApiEndpoint}/${_url}` : baseApiEndpoint;
  const method = _method || HTTP_METHOD.get;

  return fetch(url, {
    ...options,

    headers,
    method,
  });
}
