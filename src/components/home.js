import { getData } from "../api";
import { getMarkup } from "../markup";
import { tBodyEl } from "../refs";
import { addUsersTable } from "../utils";
getData("users")
  .then((r) => {
    //   console.log(r);
    const markup = getMarkup(r);
    addUsersTable(markup, tBodyEl);
    // console.log(markup);
  })
  .catch(alert);

tBodyEl.addEventListener("click", (e) => {
  const userId = e.target.closest("tr").dataset.userid;
  if (!userId) {
    return;
  }
  location.href = "user.html?userId=" + userId;
});
