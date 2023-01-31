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

export { getMarkup };
