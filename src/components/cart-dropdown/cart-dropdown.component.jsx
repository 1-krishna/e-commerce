import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => {
    console.log(cartItems)
    return (<div className='cart-dropdown '>
        <div className='cart-items'>
            {
                cartItems.map(item => (<CartItem {...item} key={item.id} />))
            }
        </div>
        <CustomButton>Checkout</CustomButton>
    </div>);
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);