import { getData } from "../api";
import { getMarkupUserTable, getMarkupUserAlbums } from "../markup";
import { addUsersTable } from "../utils";
import { jsUserTableEl, jsAlbumEl } from "../refs";

const queryResult = location.search;
const params = new URLSearchParams(queryResult);
const userId = params.get("userId") || 1;

getData(`users/${userId}`)
  .then((r) => {
    const markup = getMarkupUserTable(r);

    addUsersTable(markup, jsUserTableEl);
  })
  .catch((error) => {
    console.log(error.message);
  });

getData(`albums?userId=${userId}`)
  .then((r) => {
    console.log(r);
    const markup = getMarkupUserAlbums(r);
    addUsersTable(markup, jsAlbumEl);
  })
  .catch((error) => {
    console.log(error.message);
  });
