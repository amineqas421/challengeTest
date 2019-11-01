import React, { useEffect } from "react";
import { Tabs, Tab } from "@material-ui/core";
import moment from "moment";
export default ({ today, handleChange, value }) => {
  useEffect(() => {}, []);
  const handleDate = (date, inc) => {
    return moment(date)
      .add(inc, "d")
      .format("YYYY-MM-DD");
  };
  const handleTabs = () => {
    if (today !== "") {
      const tab = [];
      for (let i = 0; i < 4; i++) {
        tab.push(
          <Tab
            key={i}
            label={handleDate(today, i)}
            value={handleDate(today, i)}
          />
        );
      }
      return tab;
    }
  };
  return (
    <>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        centered
      >
        {handleTabs()}
      </Tabs>
    </>
  );
};
