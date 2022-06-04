import React from "react";

export const SalesTable = ({ sale }) => {
  return (
    <>
     <td><img src={sale.urlIcon} alt="icon" /><span>{sale.transaction}</span></td>
     <td><h5>{sale.date} {sale.hour}</h5></td>
     <td><h5>{sale.paymentMethod}</h5></td>
     <td><h5>{sale.id}</h5></td>
     <td><h5>{sale.amount}</h5></td>
    </>
  );
};
