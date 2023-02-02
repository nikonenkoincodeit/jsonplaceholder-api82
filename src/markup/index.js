function getMarkup(data = []) {
  return data
    .map(({ id, name, username, email, website }, index) => {
      return `<tr data-userid=${id}>
  <th scope="row">${index + 1}</th>
  <td>${name}</td>
  <td>${username}</td>
  <td>${email}</td>
  <td>${website}</td>
</tr>`;
    })
    .join("");
}

function getMarkupUserTable({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) {
  return `<tr data-userid="2">
            <th scope="row">1</th>
            <td>${name}</td>
            <td>${username}</td>
            <td>${email}</td>
            <td>${address.city}</td>
            <td>${phone}</td>
            <td>${website}</td>
            <td>${company.name}</td>
          </tr>`;
}

function getMarkupUserAlbums(albums = []) {
  return albums
    .map(({ id, title }) => {
      return `<li class="list-group-item d-flex justify-content-between align-items-start js-list-user-album" data-id="${id}">
          <div class="ms-2 me-auto">
            <div class="fw-bold">${title}</div>
          </div>
          <span class="badge bg-primary rounded-pill">rat</span>
        </li>`;
    })
    .join("");
}
function getMarkupAlbumsCard(photos = []) {
  return photos
    .map(({ id, title, thumbnailUrl }) => {
      return `<div class="card" data-set="${id}">
    <img class="bd-placeholder-img card-img-top" width="200" height="200"
      src="${thumbnailUrl}" alt="${title}" />
    <div class="card-body">
      <p class="card-text">
        ${title}
      </p>
    </div>
  </div>`;
    })
    .join("");
}
export {
  getMarkup,
  getMarkupUserTable,
  getMarkupUserAlbums,
  getMarkupAlbumsCard,
};
