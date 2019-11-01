import React, { useEffect, useState } from "react";
import Slider from "@material-ui/core/Slider";
import moment from "moment";

function valuetext(value) {
  return `${value}h`;
}

export default ({
  onChange,
  value,
  selectedDataByDate,
  tabValue,
  setSlideValue
}) => {
  const [sliderHours, setSliderHours] = useState({
    min: 0,
    max: 23
  });

  useEffect(() => {
    if (selectedDataByDate && selectedDataByDate.length > 0) {
      setSliderHours({
        min: parseInt(moment(selectedDataByDate[0].dt_txt).format("HH"), 10),
        max: parseInt(
          moment(
            selectedDataByDate[selectedDataByDate.length - 1].dt_txt
          ).format("HH"),
          10
        )
      });
    }
  }, [selectedDataByDate]);

  useEffect(() => {
    if (selectedDataByDate && selectedDataByDate.length > 0)
      setSlideValue(
        parseInt(moment(selectedDataByDate[0].dt_txt).format("HH"), 10)
      );
  }, [tabValue]);

  return (
    <Slider
      defaultValue={sliderHours.min}
      getAriaValueText={valuetext}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={1}
      marks
      min={sliderHours.min}
      max={sliderHours.max}
      value={value}
      onChange={onChange}
    />
  );
};
