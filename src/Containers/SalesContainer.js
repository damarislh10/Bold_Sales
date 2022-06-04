import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { SalesTable } from "../Components/SalesTable";
import { TotalSalesDate } from "../Components/TotalSalesDate";
import { getData } from "../Helpers/GetData";

export const SalesContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const showData = async () => {
      const data = await getData();
      setData(data);
    };

    showData();
  }, []);
  return (
    <Container className="containerAll" fluid>
      <TotalSalesDate />

      <Table>
        <caption>Tus ventas de hoy</caption>
        <thead>
          <tr>
            <th>Transacción</th>
            <th>Fecha y hora</th>
            <th>Metodo de pago</th>
            <th>ID transacción Bold</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {data.map((sale) => (
            <tr key={sale.id}>
              <SalesTable sale={sale} />
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
