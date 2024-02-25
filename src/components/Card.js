import React from "react";

export default function Card(props) {
    // let myStyl={
    //     `background:`
    // }
  return (
    <>
      <div className="container">
        <div className="card mb-4" style={{ width: "18rem" }}>
          <div className="card-body" style={{background:`${props.cardbgcolor}`}}>
            <h2 className="card-title" style={{fontWeight:'800'}}>{props.number}</h2>
            <p className="card-text">{props.category}</p>
            <a href="/" className="card-link card-footer" style={{background: '#ffffff61'}}>
              More Info →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
