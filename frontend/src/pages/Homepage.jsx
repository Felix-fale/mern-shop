import React from "react";
import Header from "../components/Layout/Header.jsx";
import Hero from "../components/Route/Hero/Hero.jsx";

function Homepage(props) {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
    </div>
  );
}

export default Homepage;
