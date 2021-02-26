import "./styles.css";
import React from "react";
import Todoitem from "./todoitems";
import Tododata from "./tododata";

function App() {
  const Todoitems = Tododata.map((item) => <Todoitem key={DataTransferItemList.id} item={item} />);
  return <div className="App">{Todoitems}</div>;
}
export default App;
