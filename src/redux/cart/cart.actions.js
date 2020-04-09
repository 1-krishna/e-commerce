import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = payload => ({
    type: CartActionTypes.ADD_ITEM,
    payload: payload
})

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const decreaseItemFromCart = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})