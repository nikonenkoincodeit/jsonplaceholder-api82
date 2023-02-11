export function makeFirstTableMarkup(items = []) {
  return items
    .map(({ id, name, username, email, website }, index) => {
      return `<tr data-userid="${id}">
    <th scope="row">${index + 1}</th>
    <td>${name}</td>
    <td>${username}</td>
    <td>${email}</td>
    <td>${website}</td>
    </tr>`;
    })
    .join("");
}
{
}

export function userIdMarkup({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) {
  return `
    <tr data-userid="${id}">
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
