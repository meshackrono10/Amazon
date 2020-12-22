import React from "react";
import "./Checkout.css";
import amazonadd from "./img/12.jpg";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left ">
        {/* amazon add */}
        <img className="checkout_ad" src={amazonadd} alt="amazon" />

        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
