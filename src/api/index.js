const BASE_URL = "https://jsonplaceholder.typicode.com/";
function getData(path = "") {
  return fetch(BASE_URL + path).then((r) => {
    if (r.ok) {
      return r.json();
    }
    throw new Error(r.statusText);
  });
}

export { getData };
