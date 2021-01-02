import React from "react";

function ListGroup({ items, onItemSelect, selectedItem }) {
  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <li
            onClick={() => onItemSelect(item)}
            style={{ cursor: "pointer" }}
            key={item._id}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
