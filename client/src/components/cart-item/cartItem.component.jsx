import React from "react";

const CartItemComponent = (props) => {
  return (
    <div className="d-flex p-3 my-3" style={{backgroundColor:"white"}}>
      <img
        src={props.cartItem.imageURL}
        alt={props.cartItem.description}
        width="100px"
      />
      <div className="container d-flex align-items-center justify-content-between">
        <div className="details d-flex flex-column" style={{ width: "90%" }}>
          <div style={{ fontWeight: "600" }}>{props.cartItem.name}</div>
          <div className="change-quantity-wrapper d-flex align-items-center">
            <button
              className="btn btn-primary change-quantity-button mx-2"
              onClick={() => props.context.removeItem(props.cartItem.id)}
            >
              -
            </button>
            <div className="quantity mx-2">{props.cartItem.cartQuantity}</div>
            <button
              className="btn btn-primary change-quantity-button mx-2"
              onClick={() => props.context.addItem(props.cartItem)}
            >
              +
            </button>
            <div className="price mx-2"> x Rs. {props.cartItem.price}</div>
          </div>
        </div>
        <div className="total-item-price" style={{ width: "20%" }}>
          Rs. {props.cartItem.cartQuantity * props.cartItem.price}
        </div>
      </div>
    </div>
  );
};

export default CartItemComponent;
