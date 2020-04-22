/* eslint-disable no-undef */
import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import "./style.css"
import { INITIAL_VALUE_PRODUCT, INCREMENTAL_VALUE } from "../../utils/constants";
import Context from "../Context";

function Contador({ nombre, precio }) {
  const pedidoContext = useContext(Context);
  const [conteo, setConteo] = useState(INITIAL_VALUE_PRODUCT);
  const price = parseFloat(precio) || 0.0

  const updateCount = ({ target }) => setConteo(+conteo + +target.getAttribute('data-value'))

  const removePedido = () => pedidoContext.removePedido(nombre)

  const updatePedido = () => pedidoContext.addPedido({ name: nombre, cantidad: conteo, precio: price })

  const productoSeleccionado = () => typeof pedidoContext.pedido.find(prod => prod.name === nombre) !== 'undefined'

  return (
    <div className="wrapper-contador">
      {productoSeleccionado() ?
        <>
          <button className="ordernar" onClick={removePedido}>Agregado</button>
        </>
        :
        <>
          <div className="contador">
            <button onClick={updateCount} data-value={-INCREMENTAL_VALUE} disabled={conteo === INITIAL_VALUE_PRODUCT}>-</button>
            <input type="number" value={conteo} className="contador-input" onChange={() => { }}></input>
            <button onClick={updateCount} data-value={INCREMENTAL_VALUE} disabled={conteo === 50}>+</button>
            <span>{parseFloat(precio * conteo).toFixed(2)}</span>
          </div>
          <button className="ordernar" onClick={updatePedido}>Agregar al Carrito</button>
        </>
      }
    </div>
  )
}

Contador.propTypes = {
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.string.isRequired
}
Contador.defaultProps = {
  nombre: '',
  precio: '0.0'
}

export default Contador
