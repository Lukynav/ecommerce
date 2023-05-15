import { addNewProductToCart } from "../redux/actions/actions"

export const addCart = (productId)=>{
    addNewProductToCart(productId)
}