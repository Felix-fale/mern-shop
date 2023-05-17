import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import ShopCreates from "../components/Shop/ShopCreates";

const ShopCreatePage = () => {
  const navigate = useNavigate();
  // const { isSeller,seller } = useSelector((state) => state.seller);

  // useEffect(() => {
  //   if(isSeller === true){
  //     navigate(`/shop/${seller._id}`);
  //   }
  // }, [])
  return <div>{/* <ShopCreates /> */}</div>;
};

export default ShopCreatePage;
