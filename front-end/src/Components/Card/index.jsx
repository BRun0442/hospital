import React from "react";
import "./index.css";

function card(props) {
  return (
    <div className="card">
      <img className="card-image" src={props.image}/>
      <p>
        {props.text}
      </p>
    </div>
  );
}

export default card;