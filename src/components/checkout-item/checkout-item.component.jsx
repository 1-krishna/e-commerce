import React from 'react';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item: { name, imageUrl, quantity, price } }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt={name} />
        </div>
        <div className='name'>{name}</div>
        <div className='quantity'>{quantity}</div>
        <div className='price'>{price}&#8377;</div>
        <div className='remove-button'><span>&#10006;</span></div>
    </div>
)

export default CheckoutItem;