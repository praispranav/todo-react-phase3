import React from "react";

function Todoitem(props) {
  return (
    <div className="App">
      <input type="checkbox" />
      <p>{props.item.text}</p>
    </div>
  );
}
export default Todoitem;
