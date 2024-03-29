import React from 'react';
import SHOP_DATA from './Shopdata';
import Collection from '../../Components/collection-preview/collection-preview';
class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const {collections} = this.state
        return(
            <div className='shop-page'>
                {collections.map(({id, ...otherCollectionProps}) => 
                    <Collection key={id} {...otherCollectionProps}/>
                    )}
            </div>
        )
    }
}
export default ShopPage;