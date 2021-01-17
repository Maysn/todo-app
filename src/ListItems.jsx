import React, { useEffect, useState } from "react";
import "./ListItems.css";

// this.state = {
//     value: textValue,
// }

// this.setState({
//     value: textValue,
// })

const ListItem = ({ item, todoDone, todoDelete, todoEdit }) => {
  const textValue = item.theTodo;
  const [value, setValue] = useState(item.theTodo);
  // if item.theTodo changes, update the state with the new theTodo
  useEffect(() => {
    setValue(item.theTodo);
  }, [item.theTodo]);

  const onBlur = () => {
    setValue(textValue);
  };
  return (
    <div id="listContainer">
      {item.done ? (
        <input style={{ textDecoration: "line-through" }} value={value}></input>
      ) : (
        <input
          style={{ background: textValue !== value ? "yellow" : "" }}
          onBlur={onBlur}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              todoEdit(value, item.id);
            }
          }}
          value={value}
        ></input>
      )}
      {item.theTodo && !item.done && (
        <button id="dnBtn" onClick={() => todoDone(item.id)}>
          Done
        </button>
      )}
      {item.theTodo && item.done && (
        <button id="dnBtn" onClick={() => todoDone(item.id)}>
          Undo
        </button>
      )}
      {item.theTodo && (
        <button id="dltBtn" onClick={() => todoDelete(item.id)}>
          X
        </button>
      )}
    </div>
  );
};
export default ListItem;
