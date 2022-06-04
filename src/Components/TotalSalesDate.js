import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FilterSales } from "./FilterSales";
import "../Styles/DateClick.css";

export const TotalSalesDate = () => {
  const [toggle, setToggle] = React.useState(false);
  const toggleButton = () => setToggle(!toggle);

  const [week, setWeek] = React.useState(false);
  const WeekButton = () => setWeek(!week);

  const [september, setSeptember] = React.useState(false);
  const septemberButton = () => setSeptember(!september);

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
          <div className="containerBtn">
            <button
              className=" btnDate"
              style={{
                backgroundColor: toggle ? "#FFF" : "#e5e7ef",
                border: toggle ? "1px solid #fff" : " 1px solid #e5e7ef",
              }}
              onClick={toggleButton}
            >
              Hoy
            </button>
            <button
              className="btnDate"
              style={{
                backgroundColor: week ? "#FFF" : "#e5e7ef",
                border: week ? "1px solid #fff" : " 1px solid #e5e7ef",
              }}
              onClick={WeekButton}
            >
              Esta semana
            </button>
            <button
              className="btnDate"
              style={{
                backgroundColor: september ? "#FFF" : "#e5e7ef",
                border: september ? "1px solid #fff" : " 1px solid #e5e7ef",
              }}
              onClick={septemberButton}
            >
              Septiembre
            </button>
          </div>
        </Col>
      </Row>
      <FilterSales />
    </Container>
  );
};
