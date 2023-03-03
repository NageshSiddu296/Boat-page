import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

export default function Features() {
  return (
    <div className="features-bar">
      <div className="features">
        <img
          className="features-logo"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_2_small.png?v=1663586590"
          alt=""
        />
        <h className="features-text">1 YEAR WARRANTY</h>
      </div>
      <div className="features">
        <img
          className="features-logo"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_3_small.png?v=1663586612"
          alt=""
        />
        <h className="features-text">FREE 7 DAYS REPLACEMENT</h>
      </div>
      <div className="features">
        <img
          className="features-logo"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_1_small.png?v=1663586576"
          alt=""
        />
        <h className="features-text">FREE SHIPPING</h>
      </div>
      <div className="features">
        <img
          className="features-logo"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_4_small.png?v=1663586627"
          alt=""
        />
        <h className="features-text">SECURE CHECKOUT</h>
      </div>
      <div className="features">
        <img
          className="features-logo"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon-black-v1_small.png?v=1661245767"
          alt=""
        />
        <h className="features-text">GST BILLING</h>
      </div>
    </div>
  );
}
