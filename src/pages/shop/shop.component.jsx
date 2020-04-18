import React from 'react';
import './shop.styles.scss';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

class Shop extends React.Component {
    unsubscribeFromSnapshot = null;
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections')
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
        })
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page' >
                <Route exact path={`${match.path}`} component={CollectionOverview} />
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );
    };

}

export const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);
