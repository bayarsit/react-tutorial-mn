import React, { useEffect } from "react";
import S2E3Comp1 from "./ep3/S2E3-Comp1";
import { useGetAllProductsQuery } from "../../redux/apiSlice";

export const S2Episode3 = () => {
  const { data, isLoading, isFetching, refetch } = useGetAllProductsQuery();

  console.log("data: ", data);

  useEffect(() => {
    refetch(); // to reload on every visit
  }, []);

  if (isFetching) {
    return <h3>Loading ...</h3>;
  }

  return (
    <div className="App-lesson">
      <div>
        <h3>
          Season 2, Episode 3: Data Fetching and State Management with Redux
          Toolkit Query
        </h3>
      </div>
      <p>RTK-Query: </p>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <span>
          <span>Products: </span>
          <br />
          <span>Total: {data?.products?.length}</span>
        </span>

        <S2E3Comp1 name="Mario" age={40} />
      </div>
    </div>
  );
};
