import React, { useContext } from "react"
import "./style.css"
import Context from "Components/Context";

const Footer = () => {
  const pedidoContext = useContext(Context);
  const pedirWA = () => {

    let mensaje = "Hola! Quiero Ordenar \n"
    mensaje = `?text=${encodeURI(mensaje.concat(pedidoContext.pedido.map(v => `${v.cantidad} de ${v.name}`).join(", ")))}`
    // eslint-disable-next-line no-undef
    window.open(pedidoContext.waURL + mensaje, '_blank');
  }
  const hayPedido = pedidoContext.pedido.length > 0
  return (
    <div className={`policy-banner ${!hayPedido ? 'banner-content-hide' : 'banner-content'}`} >
      <div className="pedido">
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