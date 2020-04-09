import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, dispatch }) => {
    console.log(cartItems)
    return (<div className='cart-dropdown '>
        {
            cartItems.length ?
                (<div className='cart-items'>
                    {
                        cartItems.map(item => (<CartItem {...item} key={item.id} />))
                    }
                </div>)
                :
                <span className='empty-message'>Cart is empty</span>
        }
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}>Checkout</CustomButton>
    </div>);
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));