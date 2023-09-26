import React from "react";
import ReactDOM from "react-dom";

function HelloWorld() {
  const name = "Jasmine";
  return (
    <>
      <div>
        <h1>This is a Hello</h1>
        Hello <strong>{name + '!'}</strong>
      </div>
      <span>another element</span>
    </>
  );
}

ReactDOM.render(<HelloWorld />, document.querySelector("#root"));
