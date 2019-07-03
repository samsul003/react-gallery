import queryString from 'query-string';

function fetchToken() {
  try {
    return localStorage.getItem('imgur_token');
  } catch (err) {
    return null;
  }
}

function initAuthClient() {
  const CLIENT_ID = 'c70e7c2f930581b';
  const qs = {
    client_id: CLIENT_ID,
    response_type: 'token',
  };
  window.location = `https://api.imgur.com/oauth2/authorize?${queryString.stringify(
    qs
  )}`;
}

export default {
  fetchToken,
  initAuthClient,
};
