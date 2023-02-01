import { getData } from "../api";
import { getMarkupUserTable } from "../markup";
import { addUsersTable } from "../utils";
import { jsUserTableEl } from "../refs";

const queryResult = location.search;
console.log(queryResult);
const params = new URLSearchParams(queryResult);
const userId = params.get("userId") || 1;

getData(`users/${userId}`)
  .then((r) => {
    const markup = getMarkupUserTable(r);
    console.log(markup);
    addUsersTable(markup, jsUserTableEl);
  })
  .catch((error) => {
    console.log(error.message);
  });
