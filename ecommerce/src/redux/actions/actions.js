import { ADD_CART, REMOVE_CART } from './actions-type'

export const addNewProductToCart = (productId) => {
  return { type: ADD_CART, payload: productId }
}

export const removeProductFromCart = (productId) => {
  return { type: REMOVE_CART, payload: productId }
}
