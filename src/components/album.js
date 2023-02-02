import { getData } from "../api";
import { getMarkupAlbumsCard } from "../markup";
import { addUsersTable } from "../utils";
import { jsSongEl } from "../refs";

const queryResult = location.search;
const params = new URLSearchParams(queryResult);
const albumId = params.get("albumId") || 1;
// console.log(queryResult);

getData(`photos?albumId=${albumId}`)
  .then((r) => {
    const markup = getMarkupAlbumsCard(r);
    addUsersTable(markup, jsSongEl);
  })
  .catch((error) => {
    console.log(error.message);
  });
