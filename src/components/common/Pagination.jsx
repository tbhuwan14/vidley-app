/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import _ from "lodash";

function Pagination({ itemCount, pageSize, currPage, onPageChange }) {
  const pagesCount = itemCount / pageSize;
  if (pagesCount <= 1) {
    return null;
  }
  const pages = _.range(1, pagesCount + 1);
  return (
    <div>
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              style={{ cursor: "pointer" }}
              className={page === currPage ? "page-item active" : "page-item"}
            >
              <a onClick={() => onPageChange(page)} className="page-link">
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
