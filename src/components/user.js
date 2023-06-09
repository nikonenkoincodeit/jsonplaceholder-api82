import { getData } from "../api";
import { userIdMarkup, createAlbumList } from "../markup";
import { userTableEl, albumEl } from "../refs";
import { addMarkup } from "../utils";

// console.log(location.search);
const params = new URLSearchParams(location.search);
// console.log(params.get('userId'));
const userId = params.get('userId');

window.addEventListener("load", onLoad);

function onLoad() {
    getData(`users/${userId}`)
      .then((resp) => {
        // console.log(resp);
        let userMarkup = userIdMarkup(resp);

        addMarkup(userTableEl, userMarkup);
      })
      .catch((error) => console.log(error.message));

    getData (`albums?userId=${userId}`)
        .then((resp) => {
        // console.log(resp);
        let userAlbums = createAlbumList(resp);
        addMarkup(albumEl, userAlbums);
      })
        .catch((error) => console.log(error.message));
  }