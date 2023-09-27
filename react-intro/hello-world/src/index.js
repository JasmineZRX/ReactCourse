import React from "react";
import ReactDOM from "react-dom";

function Custom() {
    return <span>custom</span>
}
function HelloWorld() {
  const name = "Jasmine";

  {/* this comment works */}
  {
    // works too
    //   return React.createElement(
    //     "div",
    //     null,
    //     React.createElement("h1", null, "This is a hello"),
    //     "Hello ",
    //     React.createElement("strong", null, name),
    //     React.createElement(Custom)
    //   );
  }

  return (
    <>
      <div>
        <h1>This is a Hello</h1>
        Hello <strong>{name + "!"}</strong>
      </div>
      <Custom />
    </>
  );
}

ReactDOM.render(<HelloWorld />, document.querySelector("#root"));
