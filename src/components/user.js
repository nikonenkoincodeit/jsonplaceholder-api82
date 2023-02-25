import { getData } from "../api";
import { userIdMarkup, createAlbumList } from "../markup";
import { addMarkup } from "../utils";
import { tbody, albumList } from "../refs";

albumList.addEventListener("click", onAlbumClick);

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
getData(`albums?userId=${userId}`).then((response) => {
  const markup = createAlbumList(response);

  addMarkup(markup, albumList);
});

function onAlbumClick(event) {
  const liEl = event.target.closest("li");
  if (!liEl) {
    return;
  }
  const albumId = liEl.dataset.id;
  console.log(albumId);
  location.href = "album.html?albumId=" + albumId;
}
