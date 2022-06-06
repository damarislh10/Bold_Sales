import React from "react";
import { Container } from "react-bootstrap";
import { FilterSales } from "../Components/FilterSales";
import { TotalSalesDate } from "../Components/TotalSalesDate";
import "../Styles/SalesTable.css";

export const SalesContainer = () => {
  return (
    <Container className="containerAll" fluid>
      <TotalSalesDate />
      <FilterSales />
    </Container>
  );
};
