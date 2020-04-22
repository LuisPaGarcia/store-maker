import React from "react";

export default React.createContext({
  points: 0,
  addPoints: () => { },
  pedido: [],
  addPedido: () => { },
  removePedido: () => { },
  waURL: 'https://wa.me/50249033688/'
});
