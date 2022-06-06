import React, { useEffect, useState } from "react";
import { Overlay, Popover } from "react-bootstrap";
import { getData } from "../Helpers/GetData";
import "../Styles/FilterSales.css";
import { TableSales } from "./TableSales";

export const FilterSales = () => {
  
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const [filter, setFilter] = useState({
    dataFull:[],
    dataProp:[],
    name:"",
    check:false
  });

  const {dataFull,dataProp, name, check} = filter
  
  const showData = async () => {
    const data = await getData();
    setFilter({
      ...filter,
      dataFull:data,
      dataProp:data
    })
  };

  useEffect(() => {
    showData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleClose = () => {
    setShow(!show);
  };

  const handleFilterChange =  (e) => {
    const { value, checked } = e.target;
    setFilter({
       ...filter,
       name: value, 
       check:checked
      })
  };

  const validation = () =>{
    if (check === true && name !== 'todos') {
      const filterCobro = dataFull.filter((c) => c.cobro === filter.name);
      setFilter({...filter, dataProp:filterCobro});
    } else {
      setFilter({...filter, dataProp:dataFull})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validation()
  };

  return (
    <div>
      <div className="containerBtnFilter">
        <button className="btnFilter" onClick={handleClick}>
          FILTRAR
          <img
            className="iconFilter ms-2"
            src="https://res.cloudinary.com/df90q7vvj/image/upload/v1654374553/boldPruebatecnica/icons8-opciones-para-ordenar-32_rxivzp.png"
            alt="iconFilter"
          />
        </button>
      </div>
      <div className="animateTooltip">
        <Overlay
          className="container_tooltip"
          show={show}
          target={target}
          placement="bottom"
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Header as="p" className="titleFilter text-center">
              FILTRAR
              <button className="btnClose" onClick={handleClose}>
                <img
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1654379039/boldPruebatecnica/icons8-eliminar_1_gprly9.svg"
                  alt="iconclose"
                />
              </button>
            </Popover.Header>
            <Popover.Body>
              <form className="form_filter" onSubmit={handleSubmit}>
                <input
                  type="radio"
                  name="opcion"
                  value="datafono"
                  onChange={handleFilterChange}
                />
                <span className="ms-2">Cobro con datáfono&nbsp;&nbsp;</span>
                <br />
                <input
                  type="radio"
                  name="opcion"
                  value="link"
                  onChange={handleFilterChange}
                />
                <span className="ms-2">Cobro con link de pago&nbsp;&nbsp;</span>
                <br />
                <input
                  type="radio"
                  name="opcion"
                  value="todos"
                  defaultChecked
                  onChange={handleFilterChange}
                />
                <span className="ms-2">Ver todos&nbsp;&nbsp;</span>
                <br />
                <div className="container_btn_Submit">
                  <button className= {filter.check? "btn_submit btn_submit-check" : "btn_submit"}  type="submit">
                    Aplicar
                  </button>
                </div>
              </form>
            </Popover.Body>
          </Popover>
        </Overlay>
        <TableSales data={dataProp}/>
      </div>
    </div>
  );
};
