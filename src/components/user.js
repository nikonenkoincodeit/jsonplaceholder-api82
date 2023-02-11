import { getData } from "../api";
import { userIdMarkup } from "../markup";
import { addMarkup } from "../utils";
import { tbody } from "../refs";
const search = location.search;
console.log(search);
const params = new URLSearchParams(search);
const userId = params.get("userid") || 1;

console.log(userId);

getData(`users/${userId}`).then((response) => {
  console.log(response);
  const markup = userIdMarkup(response);
  addMarkup(markup, tbody);
});
