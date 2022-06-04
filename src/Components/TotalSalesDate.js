import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
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
    <Container className="containerAll" fluid>
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
            <Button
              className="btnDate"
              variant="light"
              style={{ backgroundColor: toggle ? "#FFF" : "#969696" }}
              onClick={toggleButton}
            >
              Hoy
            </Button>
            <Button
              className="btnDate"
              variant="light"
              style={{ backgroundColor: week ? "#FFF" : "#969696" }}
              onClick={WeekButton}
            >
              Esta semana
            </Button>
            <Button
              className="btnDate"
              variant="light"
              style={{ backgroundColor: september ? "#FFF" : "#969696" }}
              onClick={septemberButton}
            >
              Septiembre
            </Button>
          </div>
        </Col>
      </Row>
      <FilterSales />
    </Container>
  );
};
