const addItemToCart = (cartItems, itemToAdd) => {
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

export default addItemToCart;