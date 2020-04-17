import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const getImages = graphql`
query {
  hamburguer: file(relativePath: { eq: "hamburguer.jpg" }) {
    childImageSharp { 
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  pizza: file(relativePath: { eq: "pizza.webp" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  beer: file(relativePath: { eq: "beer.webp" }) {
    childImageSharp {
      fluid(maxWidth: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {

  const data = useStaticQuery(getImages)
  const images = ['hamburguer', 'pizza', 'beer']
  return <>
    {images.map(e =>
      <Img key={e} fluid={data[e].childImageSharp.fluid} />
    )}
  </>
}

export default Image
