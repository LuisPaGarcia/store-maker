
const getImagesQuery = `
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
}
`

export default getImagesQuery