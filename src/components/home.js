import { getData } from "../api";
import { makeFirstTableMarkup } from "../markup";
import { tableEl } from "../refs";
import { addMarkup } from "../utils";
tableEl.addEventListener("click", onUserClick);
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

  function onUserClick(event) {
    const trEl = event.target.closest("tr");
    if (!trEl) {
      return;
    }
    const userId = trEl.dataset.userid;
    console.log(userId);
    location.href = "user.html?userId=" + userId;
  }

