import React from "react";

export default ({ temp, icon }) => {
  return (
    <div className="flex">
      <div
        style={{
          width: 128,
          height: 128,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(http://openweathermap.org/img/wn/${icon}@2x.png)`
        }}
      />
      <span className="temperature">
        {temp}
        <sup>f</sup>
      </span>
    </div>
  );
};
