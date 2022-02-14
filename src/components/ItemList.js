import React from "react";
import Item from "./Item";

const ItemList = ({ items, todoUtils }) => {
  return (
    <section>
      {items.length > 0 ? (
        <ul className="item-list">
          {items.map((item) => (
            <Item key={item.id} item={item} todoUtils={todoUtils} />
          ))}
        </ul>
      ) : (
        <div className="error">No items left</div>
      )}
    </section>
  );
};

export default ItemList;
