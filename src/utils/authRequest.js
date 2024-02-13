import { request } from './request'; // Adjust the import path as necessary

// Specialized authentication request function
export function authRequest({ url, method, data }) {
  return request({
    url, // Endpoint for the auth-related operation
    method, // HTTP method (POST for login/logout, etc.)
    body: JSON.stringify(data), // Data payload for the request
    withCredentials: true, // Ensure credentials are included in cross-origin requests
    contentType: HTTP_CONTENT_TYPE.json, // Content type, typically JSON for auth requests
  });
}
