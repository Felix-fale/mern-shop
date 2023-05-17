import React from "react";
import Header from "../components/Layout/Header";
// import CheckoutSteps from "../components/Checkout/CheckoutSteps";
// import Checkout from "../components/Checkout/Checkout";
import Footer from "../components/Layout/Footer";

function CheckoutPage(props) {
  return (
    <div>
      <Header />
      <br />
      <br />
      {/* <CheckoutSteps active={1} />
        <Checkout /> */}
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default CheckoutPage;
