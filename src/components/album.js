import { getData } from "../api";
import { createAlbumCard } from "../markup";
import { addMarkup } from "../utils";
import { listSong } from "../refs";


const search = location.search;
console.log(search);
const params = new URLSearchParams(search);
const albumId = params.get("albumId") || 1;
console.log(albumId);

getData(`photos?albumId=${albumId}`).then((response) => {
    console.log(response);
    const markup = createAlbumCard(response);
    addMarkup(markup, listSong);
  });

