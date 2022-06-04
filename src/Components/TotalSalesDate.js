import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FilterSales } from "./FilterSales";

export const TotalSalesDate = () => {
  return (
    <Container fluid>
      <Row className="mb-5">
        <Col sm={4}>
          <div>
            <h2>Total de ventas de hoy</h2>
            <h3>$1'560.000</h3>
            <span>Septiembre 21</span>
          </div>
        </Col>
        <Col sm={8}>
          <div>
            <Button variant="light">Hoy</Button>
            <Button variant="light">Esta semana</Button>
            <Button variant="light">Septiembre</Button>
          </div>
        </Col>
      </Row>
      <FilterSales/>
    </Container>
  );
};
