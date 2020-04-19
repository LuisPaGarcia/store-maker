/* eslint-disable no-undef */
import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import "./style.css"
import { INITIAL_VALUE_PRODUCT, INCREMENTAL_VALUE } from "../../utils/constants";
import Context from "../Context";

function Contador({ producto }) {
  const pedidoContext = useContext(Context);
  const [conteo, setConteo] = useState(INITIAL_VALUE_PRODUCT);

  const updateCount = ({ target }) => {
    const value = target.getAttribute('data-value')
    setConteo(+conteo + +value)
  }

  const updatePedido = () => {
    pedidoContext.addPoints(5);

    pedidoContext.addPedido({ name: producto, cantidad: conteo })
  }


  return (
    <div className="wrapper-contador">
      <div className="contador">
        <button onClick={updateCount} data-value={-INCREMENTAL_VALUE} disabled={conteo === INITIAL_VALUE_PRODUCT}>-</button>
        <input type="number" value={conteo} className="contador-input" onChange={() => { }}></input>
        <button onClick={updateCount} data-value={INCREMENTAL_VALUE} disabled={conteo === 50}>+</button>
      </div>
      <button className="ordernar" onClick={updatePedido}>Agregar al Carrito</button>
    </div>
  )
}

Contador.propTypes = {
  producto: PropTypes.string.isRequired
}
Contador.defaultProps = {
  producto: ''
}

export default Contador
