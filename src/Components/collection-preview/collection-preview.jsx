import React from 'react';
import CollectionItem from '../collection-item/collection-item.jsx'
import './collection-preview.scss'; 
const Collection = ({items, title}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toLowerCase() }</h1>
            <div className='preview'>
                {items.filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) =>
                    <CollectionItem key={id} {...otherItemProps} /> 
                    )}
            </div>
        </div>
    )
}
export default Collection;