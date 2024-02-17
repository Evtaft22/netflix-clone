export const getItems = (httpClient) => {
  return httpClient.get('/items').then((response) => response.data);
};
