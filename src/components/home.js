import { getData } from "../api";
import { makeFirstTableMarkup } from "../markup";
import { tbodyEl } from "../refs";
import { addMarkup } from "../utils";

window.addEventListener("load", onLoad);

function onLoad() {
  getData("users")
    .then((resp) => {
      const markup = makeFirstTableMarkup(resp);
      addMarkup(tbodyEl, markup);
    })
    .catch((error) => console.log(error.message));
}
