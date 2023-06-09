const BASE_URL = "https://jsonplaceholder.typicode.com/";

export function getData(param) {
  return fetch(`${BASE_URL}${param}`).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText || resp.status);
    }
    return resp.json();
  });
}
