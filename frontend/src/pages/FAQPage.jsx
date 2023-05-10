import { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

function FAQPage(props) {
  return (
    <div>
      <Header activeHeading={5} />
      {/* <Faq /> */}
      <Footer />
    </div>
  );
}

export default FAQPage;
