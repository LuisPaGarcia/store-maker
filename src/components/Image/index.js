import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Contador from "../Contador"
import "./style.css"
const products = [
  {
    nombre: 'Hamburguesa simple',
    precio: 'Q 10.00',
    unidad: 'unidad',
    image: 'hamburguer',
    descripcion: 'Esta es una hamburguesa yum yum'
  },
  {
    nombre: 'Pizza de peperoni',
    precio: 'Q 40.00',
    unidad: 'unidad',
    image: 'pizza',
    descripcion: 'Esta es una pizza yum yum'
  },
  {
    nombre: 'Six de chelas',
    precio: 'Q 100.00',
    unidad: 'unidad',
    image: 'beer',

  },
]

const getAllImages = graphql`
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
}
`

const extractName = (node) => node.split('/').pop().split('.')[0]

const prepareProducts = (edges) => {
  const imageFluid = edges.map(item => ({ name: extractName(item.node.fluid.src), fluid: item.node.fluid }))
  const productsInfo = products.map(prod => {
    const imageMatch = imageFluid.find(image => image.name === prod.image)
    return {
      ...prod,
      fluid: imageMatch ? imageMatch.fluid : ''
    }
  })
  return productsInfo

}

const Image = () => {
  const { allImageSharp: { edges } } = useStaticQuery(getAllImages)
  const productsInfo = prepareProducts(edges)

  return (
    <div className="container">
      {productsInfo.map(e =>
        <div key={e.nombre} className="product card">
          <Img fluid={e.fluid} />
          <Contador producto={e.nombre} />
        </div>
      )}
    </div>
  )
}

export default Image
