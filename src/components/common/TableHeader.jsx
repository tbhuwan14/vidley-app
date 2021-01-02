import React from "react";

function TableHeader({ columns, sortCol, onSort }) {
  const raiseSort = (path) => {
    const newSortCol = { ...sortCol };
    if (newSortCol.path === path) {
      newSortCol.order = newSortCol.order === "asc" ? "desc" : "asc";
    } else {
      newSortCol.path = path;
      newSortCol.order = "asc";
    }
    onSort(newSortCol);
  };
  const renderSortIcon = (column) => {
    if (column.path !== sortCol.path) return null;
    if (sortCol.order === "asc") return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.path || column.key}
            onClick={() => raiseSort(column.path)}
            style={{ cursor: "pointer" }}
          >
            {column.lable}
            {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
