//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";
//It should display a h1 heading.
ReactDOM.render(
  <div>
    <h1>Here is an unordered list</h1>
    <ul>
      <li> apple </li>
      <li> pear </li>
      <li> grape </li>
    </ul>
  </div>,
  document.getElementById("root")
);

//It should contain 3 list elements.
