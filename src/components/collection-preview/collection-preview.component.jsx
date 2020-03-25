import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ id, items, title }) => {
    //console.log(...otherProps);
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                        .filter((element, index) => (index < 4))
                        .map(({ id, ...otherProps }) => (<CollectionItem key={id} {...otherProps} />))
                }
            </div>
        </div>

        //<h1>something</h1>
    );
}

export default CollectionPreview;