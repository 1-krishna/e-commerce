export const addItemToCart = (cartItems, itemToAdd) => {
    const isAvailable = cartItems.find(item => item.id === itemToAdd.id);
    if (isAvailable) {
        const afterAdditionCartItems = cartItems.map(item => {
            return item.id === itemToAdd.id ?
                {
                    ...item,
                    quantity: item.quantity + 1
                }
                :
                item
        })
        return afterAdditionCartItems;
    } else {
        return ([
            ...cartItems,
            {
                ...itemToAdd,
                quantity: 1
            }
        ])
    }
}

export const decreaseItemFromCart = (cartItems, itemToBeDecreased) => {
    const item = cartItems.find(cartItem => cartItem.id === itemToBeDecreased.id);
    if (item) {
        if (item.quantity === 1) {
            return cartItems.filter(cartItem => cartItem.id !== itemToBeDecreased.id)
        } else {
            return cartItems.map(cartItem => cartItem.id === itemToBeDecreased.id ?
                ({ ...cartItem, quantity: cartItem.quantity - 1 })
                :
                (cartItem)
            )
        }
    }
    return cartItems
}