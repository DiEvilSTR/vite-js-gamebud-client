import axios from 'axios';

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

// TODO: Add auth request with credenetials set to true
export function request({
  contentType: _contentType,
  url: _url,
  headers: _headers,
  method: _method,
  withCredentials,
  ...options
}) {
  const contentType = _contentType || HTTP_CONTENT_TYPE.json;
  const headers = {
    'Content-Type': contentType,
    ...(_headers || {}),
  };
  const url = _url ? `${baseApiEndpoint}/${_url}` : baseApiEndpoint;
  const method = _method || HTTP_METHOD.get;

  return axios({
    url,
    method,
    headers,
    withCredentials,
    // Axios 'data' key is used for the request body for methods like POST, PUT
    data: method !== HTTP_METHOD.get && method !== HTTP_METHOD.delete ? options.body : null,
    // Axios uses 'params' for query string parameters in GET requests
    params: method === HTTP_METHOD.get ? options.body : null,
  })
    .then(response => response.data)
    .catch(error => {
      // Handle errors
      throw error.response || error.message;
    });
}
