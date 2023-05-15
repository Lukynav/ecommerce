import data from '../../../../data'

//* Return true or false if product exist in database
const productExist = (productId, productCb, navigate) => {
  const product = data.filter(el => el.id === productId)[0]

  // If the product exist, set the callback with the product
  if (product) productCb(product)

  // If the product not exist redirect to 400 page
  if (!product) navigate('/product-notExist')
}

export default productExist
