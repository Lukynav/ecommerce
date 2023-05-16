import { ADD_CART, REMOVE_CART } from '../actions/actions-type'

const initialState = {
  cart: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const existproduct = state.cart.filter(el => el === action.payload)
      if(existproduct.length !== 0) return {...state}
      return { ...state, cart: [...state.cart, action.payload] }
    case REMOVE_CART:
      const cartFiltered = state.cart.filter(el => el !== action.payload)
      return { ...state, cart: cartFiltered }
    default:
      return {...state}
  }
}

export default rootReducer
