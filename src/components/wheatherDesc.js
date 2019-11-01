import React from "react";
import get from "lodash/get";
export default ({ values }) => {
  return (
    <>
      <div>
        <span className="description-label">humidity : </span>
        <span className="description-">{get(values, "humidity")}</span>
      </div>
      <div>
        <span className="description-label">pressure : </span>
        <span className="description-">{get(values, "pressure")}</span>
      </div>
      <div>
        <span className="description-label">Sea level : </span>
        <span className="description-">{get(values, "sea_level")}</span>
      </div>
    </>
  );
};
