import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFinalCart } from "../features/cartItemsSlice";
import { selectUser } from "../features/userSlice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";

function Purchases() {
  const user = useSelector(selectUser);
  //   const [purchasedProducts, setPurchasedProducts] = useState([]);
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  
  let products = JSON.parse(localStorage.getItem("purchase"));
  
  let renderFavourites = products.map((pro) => {
    return (
      <div className="col-md-4 mb-4">
        {console.log('abcd'+pro)}
        <div className="card">
          <img
            src={require("../Images/" + pro.itemImage)}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{pro.itemName}</h5>
            <p>Price: ${pro.itemPrice}</p>
            <p className="card-text">{pro.itemDescription}</p>
          </div>
        </div>
      </div>
    );
  });

  return(
    <>
      <div>
        { renderFavourites }
      </div>   

    </>
  );
}

export default Purchases;