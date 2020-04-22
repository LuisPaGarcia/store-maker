import React, { useContext } from "react"
import "./style.css"
import Context from "../Context";
const Footer = () => {
  const pedidoContext = useContext(Context);
  const pedirWA = () => {
    const mensaje = `?text=${encodeURI(pedidoContext.pedido.map(v => `${v.cantidad} de ${v.name}`).join(", "))}`
    window.open(pedidoContext.waURL + mensaje, '_blank');
  }

  return (
    <div className="policy-banner banner-content" >
      <div className="pedido">
        {pedidoContext.pedido.map((item) => (<span key={item.name}>{item.name}: {item.cantidad}</span>))}
      </div>
      {pedidoContext.pedido.length === 0 ? null :
        <div className="Pedir">
          <button onClick={pedirWA}>Pedir!</button>
        </div>
      }
    </div >
  )
}

export default Footer