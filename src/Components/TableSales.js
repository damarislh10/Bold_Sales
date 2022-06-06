import React from 'react'
import { Table } from "react-bootstrap";
import { SalesTable } from "../Components/SalesTable";

export const TableSales = ({data}) => {
  return (
    <div>
        <div  className="table-responsive container-table">
      <Table className="tableSales">
        <caption className="titleTable">Tus ventas de hoy</caption>
        <thead>
          <tr className="nameFilas">
            <th>Transacción</th>
            <th>Fecha y hora</th>
            <th>Método de pago</th>
            <th>ID transacción Bold</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {data.map((sale) => (
            <tr className="dataT" key={sale.id}>
              <SalesTable sale={sale} />
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
    </div>
  )
}
