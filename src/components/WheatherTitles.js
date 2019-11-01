import React from "react";

export default ({ today, location, condition }) => {
  return (
    <>
      <div className="weather-city mt-1">{location}</div>
      <div className="date mt-1">{today}</div>
      <div className="wheather-description mt-1">{condition}</div>
    </>
  );
};
