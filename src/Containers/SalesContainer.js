import React, { useEffect, useState } from "react";
import "../Data/sales.json";
import { url } from "../Helpers/url";

export const SalesContainer = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const resp = await fetch(url);
    const result = await resp.json();
    console.log(result);
   setData(data);
  };
  
  useEffect(() => {

    getData();
  }, []);
  return <div>{data}</div>;
};
