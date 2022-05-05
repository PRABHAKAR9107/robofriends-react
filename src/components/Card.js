import React from "react";

export default function Card(props) {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robot" src={`https://robohash.org/${props.id}?200x200`} />
      <div>
        <h3> {props.name}</h3>
        <p>{props.email}</p>
      </div>
    </div>
  );
}
