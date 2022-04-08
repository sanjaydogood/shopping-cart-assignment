import React, { useState } from "react";
import { cartConsumer } from "../../contexts/cartContext";
import MyCartModal from "../my-cart-modal/myCartModal.component";

const ProductComponent = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const cartModalProps = {
    show,
    handleClose,
  };
  return (
    <div
      className="d-flex flex-column align-items-center m-4"
      style={{ width: "25%" }}
    >
      <div style={{ height: "50px", fontWeight: "600" }}>
        {props.product.name}
      </div>
      <img
        src={props.product.imageURL}
        alt={props.product.name}
        width="200px"
      />
      <p style={{ height: "100px", overflow: "hidden" }}>
        {props.product.description}
      </p>
      <div
        className="d-flex align-items-center justify-content-between"
        style={{ width: "100%" }}
      >
        <div className="price" style={{ fontWeight: "600" }}>
          Rs. {props.product.price}
        </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            props.context.addItem(props.product);
            setShow(true);
          }}
        >
          Buy Now
        </button>
        {cartConsumer(MyCartModal, { ...cartModalProps })}
      </div>
    </div>
  );
};

export default ProductComponent;
