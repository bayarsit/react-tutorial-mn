import { useEffect, useState } from "react";
import { useLazyGetProductQuery } from "../../../redux/apiSlice";

function S2E3Comp1(props) {
  const [product, setProduct] = useState({});
  const [trigger, { data, isLoading, isFetching }] = useLazyGetProductQuery();

  const loadProduct = () => {
    trigger("iphone x");
  };

  useEffect(() => {
    // Code to run whenever the userName prop changes
    if (data?.products.length > 0) {
      setProduct(data?.products[data?.products.length - 1]);
    }

    return () => {
      // Cleanup function
      // Code to run when the component unmounts or when the userName prop changes again
    };
  }, [data]);

  if (isLoading) {
    return <h3>Loading ...</h3>;
  }

  return (
    <div
      className="Comp-container"
      style={{ backgroundColor: "darkgreen", width: 420 }}
    >
      Brand: {product?.brand}, Model: {product?.title}
      <br />
      <br />
      <img src={product?.images?.[0]} width={300} />
      <br />
      Price: {product?.price}$
      <br />
      <br />
      <button onClick={loadProduct}>Load now</button>
    </div>
  );
}

export default S2E3Comp1; //  give a chance to call it by any name
