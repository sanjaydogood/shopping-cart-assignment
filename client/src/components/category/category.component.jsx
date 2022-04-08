import React from "react";

const CategoryComponent = (props) => {
  return (
    <div
      className="d-flex align-items-center justify-content-evenly my-3 p-3 shadow"
      style={{ width: "75%" }}
    >
      <div>
        <img
          src={props.categoryDetails.imageUrl}
          alt={props.categoryDetails.description}
          width="300px"
        />
      </div>
      <div className="d-flex flex-column align-items-center justify-items-center">
        <h3>{props.categoryDetails.name}</h3>
        <p>{props.categoryDetails.description}</p>
        <button className="btn btn-primary">
          Explore {props.categoryDetails.name}
        </button>
      </div>
    </div>
  );
};

export default CategoryComponent;
