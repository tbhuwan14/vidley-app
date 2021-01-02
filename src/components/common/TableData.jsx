import React from "react";
import _ from "lodash";

function TableData({ data, columns }) {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item, column);

    return _.get(item, column.path);
  };
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {columns.map((column) => (
            <td>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableData;
