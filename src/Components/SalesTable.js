import React from "react";
import "../Styles/SalesTable.css";

export const SalesTable = ({ sale }) => {
  return (
    <>
      <td>
        <img className="imageCobro" src={sale.urlIcon} alt="icon" />
        <span className="ms-2">{sale.transaction}</span>
      </td>
      <td className="dataSale">
        {sale.date} - {sale.hour}
      </td>
      <td className="dataSale">
        <img
          className="iconMasterCard"
          src="https://res.cloudinary.com/df90q7vvj/image/upload/v1654385217/boldPruebatecnica/icons8-mastercard_p6g3cs.svg"
          alt="iconMastercard"
        />
        {sale.paymentMethod}
      </td>
      <td className="dataSale">{sale.id}</td>
      <td className="">$ {sale.amount}</td>
    </>
  );
};
