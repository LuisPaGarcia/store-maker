/* eslint-disable no-undef */
import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import "./style.css"
import { INITIAL_VALUE_PRODUCT, INCREMENTAL_VALUE } from "Utils/constants";
import Context from "Components/Context";

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
          <button className="remover" onClick={removePedido}>Quitar</button>
        </>
        :
        <>
          <div className="contador">
            <button onClick={updateCount} data-value={-INCREMENTAL_VALUE} disabled={conteo === INITIAL_VALUE_PRODUCT}>-</button>
            <label htmlFor={`input-${nombre}`} style={{ display: 'none' }}>value</label>
            <input name={`input-${nombre}`} id={`input-${nombre}`} type="number" value={conteo} className="contador-input" onChange={() => { }}></input>
            <button onClick={updateCount} data-value={INCREMENTAL_VALUE} disabled={conteo === 50}>+</button>
            <p className="contador-value">{parseFloat(precio * conteo).toFixed(2)}</p>
          </div>
          <button className="ordernar" onClick={updatePedido}>Agregar</button>
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
