import { getData } from "../api";
import { makeFirstTableMarkup } from "../markup";
import { tableEl } from "../refs";
import { addMarkup } from "../utils";
getData("users")
  .then((response) => {
    const markup = makeFirstTableMarkup(response);
    addMarkup(markup, tableEl);
    console.log(response);
    console.log(markup);
  })
  .catch((error) => {
    console.log(error.message);
  });
