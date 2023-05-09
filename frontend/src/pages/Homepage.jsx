import React from "react";
import Header from "../components/Layout/Header.jsx";
import Hero from "../components/Route/Hero/Hero.jsx";
import Categories from "../components/Route/Categories/Categories.jsx";

function Homepage(props) {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
    </div>
  );
}

export default Homepage;
