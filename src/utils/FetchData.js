import React, { useEffect, useState } from "react";
import axios from "axios";
import get from "lodash/get";
export const FetchData = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const apiCall = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast/hourly?q=Berlin,us&appid=b6907d289e10d714a6e88b30761fae22",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Credentials": "true"
          }
        }
      );
      setData(get(result, "data", null));
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  return [error, loading, data];
};
