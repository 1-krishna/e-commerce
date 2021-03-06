import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, decreaseItemFromCart, addItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, clearItem, decreaseItem, addItem }) => {
    const { name, imageUrl, quantity, price } = item
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <div className='name'>{name}</div>
            <div className='quantity'>
                <div className='arrow' onClick={() => decreaseItem(item)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
            </div>
            <div className='price'>{price}&#8377;</div>
            <div className='remove-button' onClick={() => clearItem(item)}>&#10006;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    decreaseItem: item => dispatch(decreaseItemFromCart(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);