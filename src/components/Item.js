import React from "react";

const Item = ({ item, todoUtils }) => {
  const { updateTodo, deleteTodo } = todoUtils;
  return (
    <li className={item.done ? "item done" : "item"}>
      <input
        name={item.id}
        id={item.id}
        type="checkbox"
        checked={item.done}
        onChange={(e) => {
          updateTodo(item.id, e.target.checked);
        }}
      />
      <label htmlFor={item.id}>{item.text}</label>
      <button
        onClick={() => {
          deleteTodo(item.id);
        }}
        className="delete"
      >
        x
      </button>
    </li>
  );
};

export default Item;
