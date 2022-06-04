import React, { useRef, useState } from "react";
import { Button, Overlay, Popover } from "react-bootstrap";
import { getData } from "../Helpers/GetData";

export const FilterSales = () => {
  const [filter, setFilter] = useState();
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const getCobro = async () => {
    const data = await getData();
    return data;
  };

  const handleFilterChange = async (e) => {
    const { name, checked } = e.target;
    // console.log(name, checked);
    const data = await getCobro();
    console.log(data);
    if (checked === true) {
      const filterCobro = data.filter((c) => c.cobro === name);
      console.log("Son iguales", filterCobro);
      setFilter(filterCobro);
    }
  };
  return (
    <div ref={ref}>
      <Button onClick={handleClick}>Filtrar</Button>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">Filtrar</Popover.Header>
          <Popover.Body>
            <input
              type="checkbox"
              name="datafono"
              onChange={handleFilterChange}
            />
            <span className="ms-2">Cobro con datáfono&nbsp;&nbsp;</span>
            <br />
            <input type="checkbox" name="link" onChange={handleFilterChange} />
            <span className="ms-2">Cobro con link de pago&nbsp;&nbsp;</span>
            <br />
            <input type="checkbox" name="todos" onChange={handleFilterChange} />
            <span className="ms-2">Ver todos&nbsp;&nbsp;</span>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};
