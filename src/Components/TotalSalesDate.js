import React from "react";
import { Col, Container, Row } from "react-bootstrap";
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
            <div className="titleSales">
              <h2 className="titleh2">Total de ventas de hoy</h2>
              <img src="https://res.cloudinary.com/df90q7vvj/image/upload/v1654372096/boldPruebatecnica/icons8-informaci%C3%B3n-24_vhjlf2.png" alt="icon_Information"/>
            </div>
            <div className="container_total">
              <h3 className="priceTotal">$1'560.000</h3>
              <span>Septiembre 21</span>
            </div>
          </div>
        </Col>
        <Col sm={8}>
          <div className="containerBtn">
            <button
              className="btnDate"
              style={{
                backgroundColor: toggle ? "#e5e7ef" : "#FFF",
                border: toggle ? "1px solid #e5e7ef" : " 1px solid #FFF",
              }}
              onClick={toggleButton}
            >
              Hoy
            </button>
            <button
              className="btnDate"
              style={{
                backgroundColor: week ? "#e5e7ef" : "#fff",
                border: week ? "1px solid #e5e7ef" : " 1px solid #fff",
              }}
              onClick={WeekButton}
            >
              Esta semana
            </button>
            <button
              className="btnDate"
              style={{
                backgroundColor: september ? "#e5e7ef" : "#fff",
                border: september ? "1px solid #e5e7ef" : " 1px solid #fff",
              }}
              onClick={septemberButton}
            >
              Septiembre
            </button>
          </div>
        </Col>
      </Row>
      
    </Container>
  );
};
