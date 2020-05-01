import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { NotificationManager } from 'react-notifications';

const CollectionItem = ({ item, addItem }) => {
    const { name, imageUrl, price } = item;
    return (<div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}₹</span>
        </div>
        <CustomButton inverted className='custom-button' onClick={() => { addItem(item); NotificationManager.success(item.name, 'Successfully Added') }}>Add To Cart</CustomButton>
    </div>)
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);