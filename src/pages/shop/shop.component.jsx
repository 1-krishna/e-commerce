import React from 'react';
import './shop.styles.scss';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';

const Shop = () => {
    return (
        <div className='shop-page'>
            <CollectionOverview />
        </div>
    );
}

export default Shop;
