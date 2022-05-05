import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: "scroll ",
        border: "5px solid green ",

        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;

//props.children represents the content between the opening and the closing tags when invoking/rendering a component:
