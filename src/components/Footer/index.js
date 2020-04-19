import React, { useContext } from "react"
import "./style.css"
import Context from "../Context";
const Footer = () => {
  const pedidoContext = useContext(Context);

  console.log(pedidoContext.pedido)

  return (
    <div className="policy-banner banner-content" >
      <div>Bottom banner</div>{pedidoContext.score}
      <div>
        {pedidoContext.pedido.map((item) => (<h1 key={item.name}>{item.name}: {item.cantidad}</h1>))}
      </div>
    </div >
  )
}

export default Footer