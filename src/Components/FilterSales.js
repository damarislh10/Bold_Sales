import React from "react";

export const FilterSales = () => {

    const handleFilterChange = (e) => {
        const {name, checked} = e.target;
        console.log(name,checked);
    }
  return (
    <div>
      <input type="checkbox" name="datafono" onChange={handleFilterChange}/>Cobro con datafono&nbsp;&nbsp;
      <input type="checkbox" name="link" onChange={handleFilterChange}/>Cobro con link de pago&nbsp;&nbsp;
      <input type="checkbox" name="todos" onChange={handleFilterChange}/>Ver todos&nbsp;&nbsp;
    </div>
  );
};
