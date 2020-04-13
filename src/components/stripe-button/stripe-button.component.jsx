import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { PUBLISHABLE_KEY } from './stripe-button.utils';

const StripeCheckoutButton = ({ price }) => {
    const publishableKey = PUBLISHABLE_KEY;
    const priceForStripe = price * 100;

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='E-Commerce Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is ₹${price}`}
            amount={priceForStripe}
            currency='INR'
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;