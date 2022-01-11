/** @format */

import React from "react";

import "./index.css";

export default function Tour({ Tour }) {
  const deleteHandler = () => {
    fetch("http://localhost:9000/Tours/" + Tour.id, {
      method: "DELETE",
    });
  };
  return (
    <div>
      {Tour.map((tour) => {
        const { id, name, info, image, price } = tour;
        return (
          <article className="container">
            <img src={image} alt={name} />
            <div>
              <div className="nameANDprice">
                <h1>{name}</h1>
                <h1>{price}</h1>
              </div>
              <p>{info}</p>
              <button onClick={deleteHandler} className="btn">
                Not interested
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
