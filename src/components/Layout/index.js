import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import Footer from "../Footer"
import "./layout.css"
import Context from "../Context";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [score, setScore] = useState(0);
  const [pedido, setPedido] = useState([]);

  const initContext = {
    addPoints: points => { setScore(score => score + points) },
    addPedido: objeto => { setPedido(pedido => [...pedido, objeto]) },
    removePedido: name => { setPedido(pedido => [...pedido.filter(e => e.name !== name)]) },
    score,
    pedido,
    waURL: 'https://wa.me/50249033688/'
  }

  return (
    <>
      <Context.Provider
        value={initContext}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
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
