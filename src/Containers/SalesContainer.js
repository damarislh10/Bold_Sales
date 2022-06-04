import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { SalesTable } from "../Components/SalesTable";
import { url } from "../Helpers/url";

export const SalesContainer = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const resp = await fetch(url);
    const result = await resp.json();
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container fluid>
      <Table>
      <caption >Tus ventas de hoy</caption>
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
