import React, { useState } from "react";
import { getData } from "../Helpers/GetData";

export const FilterSales = () => {
  const [filter, setFilter] = useState();

  const getCobro = async () => {
    const data = await getData();
    return data;
  };

  const handleFilterChange = async (e) => {
    const { name, checked } = e.target;
    // console.log(name, checked);
    const data = await getCobro();
    console.log(data);
    if (checked === true) {
      const filterCobro = data.filter((c) => c.cobro === name);
      console.log("Son iguales", filterCobro);
      setFilter(filterCobro);
    }
  };
  return (
    <div>
      <input type="checkbox" name="datafono" onChange={handleFilterChange} />
      Cobro con datafono&nbsp;&nbsp;
      <input type="checkbox" name="link" onChange={handleFilterChange} />
      Cobro con link de pago&nbsp;&nbsp;
      <input type="checkbox" name="todos" onChange={handleFilterChange} />
      Ver todos&nbsp;&nbsp;
    </div>
  );
};
