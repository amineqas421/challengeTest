import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SliderWheather from "./sliderWheather";
import "../assets/style.css";
import get from "lodash/get";
import filter from "lodash/filter";
import find from "lodash/find";
import startsWith from "lodash/startsWith";
import { FetchData } from "../utils/FetchData";
import WeatherDesk from "./wheatherDesc";
import Tabs from "./Tabs";
import Loader from "./Loader";
import moment from "moment";
import IconTemp from "./IconTemp";
import WheatherTitles from "./WheatherTitles";
import { mapHours } from "../utils/mapHour";
export default () => {
  const [error, loading, data] = FetchData();

  const [slideValue, setSlideValue] = useState(0);
  const [result, setResult] = useState(null);
  let today = get(data, "list[0].dt_txt", "");
  const [tabValue, setTabValue] = useState("");
  useEffect(() => {
    if (get(data, "list[0].dt_txt", "") !== "") {
      const val = get(data, "list[0].dt_txt", "");
      setTabValue(moment(val).format("YYYY-MM-DD"));
      setSlideValue(moment(val).format("HH"));
    }
  }, [data]);
  const selectedDataByDate = filter(get(data, "list", []), function(obj) {
    return startsWith(obj.dt_txt, moment(tabValue).format("YYYY-MM-DD"));
  });
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const handleChangeSlider = (event, val) => {
    setSlideValue(val);
  };

  useEffect(() => {
    selectedDataByDate.length > 0 &&
      setResult(
        find(selectedDataByDate, {
          dt_txt: `${tabValue} ${mapHours[slideValue]}`
        })
      );
  }, [slideValue, selectedDataByDate]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Paper className="card-weather-container">
          {error === null ? (
            <>
              <Tabs
                value={tabValue}
                handleChange={handleChange}
                today={today}
              />
              <Grid container style={{ borderRadius: 10 }}>
                <Grid item xs={12} sm={12}>
                  <div style={{ height: 350 }}>
                    <WheatherTitles
                      today={tabValue}
                      location={"Berlin"}
                      condition={get(result, "weather[0].description", "")}
                    />
                    <div className="mt-2">
                      <div className="flex">
                        <IconTemp
                          icon={get(result, "weather[0].icon", "")}
                          temp={get(result, "main.temp", "")}
                        />
                        <div className="ml-5">
                          <WeatherDesk values={get(result, "main", "")} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} style={{ padding: "0px 30px" }}>
                  <SliderWheather
                    value={slideValue}
                    setSlideValue={setSlideValue}
                    tabValue={tabValue}
                    selectedDataByDate={selectedDataByDate}
                    onChange={handleChangeSlider}
                  />
                </Grid>
              </Grid>
            </>
          ) : (
            "ERROR WEATHER"
          )}
        </Paper>
      )}
    </>
  );
};
