import React, { useRef, useState } from "react";
import { Overlay, Popover } from "react-bootstrap";
import { getData } from "../Helpers/GetData";
import "../Styles/FilterSales.css";

export const FilterSales = () => {
  const [filter, setFilter] = useState();
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleClose = () => {
    setShow(!show);
  };
  const getCobro = async () => {
    const data = await getData();
    return data;
  };

  const handleFilterChange = async (e) => {
    const { name, checked } = e.target;
    // console.log(name, checked);
    const data = await getCobro();
    if (checked === true) {
      const filterCobro = data.filter((c) => c.cobro === name);
      setFilter(filterCobro);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Son iguales", filter);
  };
  return (
    <div ref={ref}>
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
          container={ref}
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
                  type="checkbox"
                  name="datafono"
                  onChange={handleFilterChange}
                />
                <span className="ms-2">Cobro con datáfono&nbsp;&nbsp;</span>
                <br />
                <input
                  type="checkbox"
                  name="link"
                  onChange={handleFilterChange}
                />
                <span className="ms-2">Cobro con link de pago&nbsp;&nbsp;</span>
                <br />
                <input
                  type="checkbox"
                  name="todos"
                  onChange={handleFilterChange}
                />
                <span className="ms-2">Ver todos&nbsp;&nbsp;</span>
                <br />
                <div className="container_btn_Submit">
                  <button className="btn_submit" type="submit">
                    Aplicar
                  </button>
                </div>
              </form>
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
    </div>
  );
};
