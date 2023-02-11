export function makeFirstTableMarkup(items = []) {
  return items
    .map(({ id, name, username, email, website }, index) => {
      return `<tr data-userid="${id}">
    <th scope="row">${index + 1}</th>
    <td>${name}</td>
    <td>${username}</td>
    <td>${email}</td>
    <td>${website}</td>
<<<<<<< HEAD
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
=======
  </tr>`;
    })
    .join("");
}
>>>>>>> eb7abd3c746d95da1f960a492381e49abfa08c96
