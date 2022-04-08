import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import CartItemComponent from "../cart-item/cartItem.component";
import { cartConsumer } from "../../contexts/cartContext";

function MyCartModal(props) {
  const cartItemElements = props.context.cartItems.map((cartItem) =>
    cartConsumer(CartItemComponent, { cartItem }, cartItem.id)
  );

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            My Cart ({props.context.cartItems.length} items)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "#ebebeb",
            padding: "1em 0",
            height: "25em",
            overflow: "auto",
          }}
        >
          {cartItemElements}
          <div className="d-flex align-items-center p-2 mx-2" style={{ backgroundColor: "white" }}>
            <img src="/static/images/lowest-price.png" width="20%" alt="" />
            <div className="promo-text" style={{textAlign:"center",width:"80%"}} >You won't find it cheaper anywhere</div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="d-flex align-items-center justify-content-between"
            variant="primary"
            onClick={props.handleClose}
            style={{ width: "100%" }}
          >
            <div> Proceed to Checkout</div>
            <div>
              Rs.{" "}
              {props.context.cartItems.reduce((acc, el) => {
                acc += el.price * el.cartQuantity;
                return acc;
              }, 0)}{" "}
              &gt;
            </div>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyCartModal;
