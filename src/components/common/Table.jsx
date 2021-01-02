import React from "react";
import TableData from "./TableData";
import TableHeader from "./TableHeader";

function Table({ columns, onSort, sortCol, data }) {
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortCol={sortCol} />
      <TableData data={data} columns={columns} />
    </table>
  );
}

export default Table;
