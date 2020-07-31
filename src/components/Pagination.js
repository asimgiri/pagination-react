import React from "react";

export default function Pagination({
  currentPage,
  itemsPerPage,
  totalItems,
  onClick,
}) {
  const pages = [];

  const a = [12, 234, 123, 432, 657, 123, 657, 78, 35, 89, 231, 65, 123];

  const result = a.sort((x, y) => x - y);

  console.log(result);

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onClick(page)} href="!#">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
