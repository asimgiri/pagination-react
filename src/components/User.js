import React from "react";

export default function User({ users }) {
  return (
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <th scope="row">{user.id}</th>
          <td>{user.login}</td>
          <td>{user.type}</td>
          <td>{user.url}</td>
          <td>
            <img src={user.avatar_url} alt="user" />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
