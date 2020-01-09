import React from "react";

function Heading(props) {
  const size = props.size
    .split(" ")
    .map(size => "h" + size)
    .join(" ");

  return <p className={size}>{props.children}</p>;
}

export default Heading;