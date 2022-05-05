import React from "react";

import Card from "./Card";

export default function Cardlist({ robots }) {
  const cardComponent = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <div>{cardComponent}</div>;
}

//pure components:- receives an input and then always return same output.
