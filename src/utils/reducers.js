/**
 * Merge products with images, the image name and the product 'image' prop must be the same
 * @param {GatsbyImageObject} edges Images treated, ready to use in Gatsby Image component 
 * @param {ProductsArray} products Product details object
 */
const prepareProducts = ({ edges, products }) => {
  // path/to/image/image-name.ext --> image-name
  const extractName = (node) => node.split('/').pop().split('.')[0]

  // Return the image name extracted from src prop and the fluid object
  const imageFluid = edges.map(item => ({ name: extractName(item.node.fluid.src), fluid: item.node.fluid }))

  // Itareate all the products
  const productsInfo = products.map(prod => {

    // Search for a match between products and images array.
    const imageMatch = imageFluid.find(image => image.name === prod.image)

    // Returns all products with the image if it match
    return {
      ...prod,
      // If there's a match, will be added as fluid
      fluid: imageFluid.find(image => image.name === prod.image) ? imageMatch.fluid : ''
    }
  }
  )
  return productsInfo
}

export { prepareProducts }