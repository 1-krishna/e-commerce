//selectors prevent un-neccessary re-rendering of components if related value isn't changed

import { createSelector } from 'reselect'

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    items => items.reduce((cummulativeSum, currentValue) => (cummulativeSum += currentValue.quantity), 0)
)