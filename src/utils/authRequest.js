import { request } from './request'; // Adjust the import path as necessary

// Specialized authentication request function
export function authRequest({ contentType, url, headers, method, ...options }) {
  // Add withCredentials to the request options
  const withCredentials = true;

  return request({
    contentType,
    url,
    headers,
    method,
    withCredentials,
    ...options,
  });
}
