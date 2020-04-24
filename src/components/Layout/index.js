import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "Components/Header"
import Footer from "Components/Footer"
import Context from "Components/Context";
import "./style.css"
import { WHATSAPP_URL } from "../../utils/constants"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          cellphone
          areacode
        }
      }
    }
  `)

  const [score, setScore] = useState(0);
  const [pedido, setPedido] = useState([]);
  const { site: { siteMetadata: { areacode, cellphone, title } } } = data
  const initContext = {
    addPoints: points => { setScore(score => score + points) },
    addPedido: objeto => { setPedido(pedido => [...pedido, objeto]) },
    removePedido: name => { setPedido(pedido => [...pedido.filter(e => e.name !== name)]) },
    score,
    pedido,
    waURL: WHATSAPP_URL.concat(areacode, cellphone)
  }

  console.log(initContext.waURL)
  return (
    <>
      <Context.Provider
        value={initContext}
      >
        <Header siteTitle={title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
        </div>
        <Footer />
      </Context.Provider>
    </>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
