import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles';

const CollectionPage = ({ collection }) => (
  <div className='collection-page'>
    <h2>Collection Page</h2>
    {
      console.log(collection)
    }
  </div>
  
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);