import React from 'react';
import './collection.styles.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';
import PageNotFound from '../page-not-found/page-not-found.component';

const CollectionPage = ({ collection }) => {
    if (!collection) {
        return (<PageNotFound countdown='10' />)
    }
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <div className='title'>{title}</div>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div >
    )
}

const mapStateToProps = (state, parentProps) => ({
    collection: selectCollection(parentProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);