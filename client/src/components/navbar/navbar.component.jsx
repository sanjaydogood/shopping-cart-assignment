import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cartConsumer } from "../../contexts/cartContext";
import MyCartModal from "../my-cart-modal/myCartModal.component";
import "./navbar.css";

const NavbarComponent = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const cartModalProps = {
    show,
    handleClose,
  };
  return (
    <>
      <nav className="d-flex flex-row justify-content-between p-3 shadow">
        <div className="d-flex align-items-center">
          <img
            src="/static/images/logo.png"
            alt="three squares of different colors with text Sabka Bazaar"
            width="100px"
            className="mx-5"
          />
          <div className="nav-items-container d-flex mx-3">
            <Link className="mx-2 nav-item" to="/home">
              Home
            </Link>
            <Link className="mx-2 nav-item" to="/products">
              Products
            </Link>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="nav-items-container d-flex mx-3">
            <Link className="mx-2 nav-item" to="/login">
              Sign In
            </Link>
            <Link className="mx-2 nav-item" to="/register">
              Register
            </Link>
          </div>
          <button
            className="btn btn-info cart-container d-flex mx-5"
            onClick={() => setShow(true)}
          >
            <img src="/static/images/cart.svg" alt="" width="30px" />
            <div className="cart-items-text mx-1">
              {props.context.cartItems.length} items
            </div>
          </button>
          {cartConsumer(MyCartModal, { ...cartModalProps })}
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
