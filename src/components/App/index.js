import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import Contador from "../Contador"
import "./style.css"
import { prepareProducts } from "../../utils/reducers"

// Fetch all the images from the treatement from Gatsby Sharp
// And the products saved in gatsby-config.js
const getData = graphql`
query {
  allImageSharp {
    edges {
      node {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  
  site {
    siteMetadata {
      products {
        nombre
        precio
        unidad
        image
        descripcion
      }
    }
  }
}
`


const App = () => {
  // Extract the image edges and the products from the query
  const { allImageSharp: { edges }, site: { siteMetadata: { products } } } = useStaticQuery(getData)
  // Merge the images with the products
  const productsInfo = prepareProducts({ edges, products })

  return (
    <div className="container">
      {/* Iterate between all products and render the counter and the image */}
      {productsInfo.map(product =>
        <div key={product.nombre} className="product card">
          <GatsbyImage fluid={product.fluid} />
          <Contador {...product} />
        </div>
      )}
    </div>
  )
}

export default App
