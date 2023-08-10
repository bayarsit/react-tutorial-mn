import { useEffect, useState } from "react";

export const Item = (props) => {
  const { data } = props;

  return (
    <>
      {/* collision box */}
      <div
        className="collision-box"
        style={{
          left: data.x,
          top: data.y,
          width: data.width,
          height: data.height,
        }}
      ></div>
      {/* Item container */}
      <div
        className="no-border game-item"
        style={{
          left: data.x,
          top: data.y,
        }}
      >
        {/* Item image */}
        <img width={data.width} src={`/images/animated/${data.img}.gif`} />
      </div>
    </>
  );
};
