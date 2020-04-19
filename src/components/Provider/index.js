import { useState } from "react"
function usePedido(initialState = []) {
  let [pedido, setPedido] = useState(initialState)
  const add = (nuevo) => setPedido([...pedido, nuevo])
  // eslint-disable-next-line no-undef
  const remove = () => console.log('remove')
  return { pedido, add, remove }
}

export default usePedido