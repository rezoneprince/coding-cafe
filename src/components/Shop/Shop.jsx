import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import "./Shop.css";
import Bookmark from "../Bookmark/Bookmark";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [addTimes, setAddTimes] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (bookmark) => {
    const addCart = [...bookmarks, bookmark];
    setBookmarks(addCart);
  };

  const handleAddToTime = (newTime) => {
    const addAllTime = addTimes + newTime;
    setAddTimes(addAllTime);
  };

  return (
    <div className="shop grid md:grid-cols-2 gap-2">
      <div className="shop-container md:ml-36 w-11/12">
        {products.map((product) => (
          <Products
            product={product}
            handleAddToCart={handleAddToCart}
            handleAddToTime={handleAddToTime}
            key={product.id}
          ></Products>
        ))}
      </div>

      <div className="purchase-product mx-28 w-2/4 gap-5">
        {<Bookmark bookmarks={bookmarks} addTimes={addTimes}></Bookmark>}
      </div>
    </div>
  );
};

export default Shop;
