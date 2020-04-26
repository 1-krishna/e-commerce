import React from 'react';
import './shop.styles.scss';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { isCollectionFetching, isCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class Shop extends React.Component {
    componentDidMount() {
        //Now we are doing this in shop action
        /*const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections')
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        })*/
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match } = this.props;
        //we can also set INITIAL_VALUE of isFetching to true and use isFetching instead of isCollectionsLoaded
        const { isFetching, isCollectionsLoaded } = this.props;
        return (
            <div className='shop-page' >
                <Route exact path={`${match.path}`}
                    render={props => <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />}
                />
                <Route exact path={`${match.path}/:collectionId`}
                    render={props => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />}
                />
            </div>
        );
    };

}

export const mapStateToProps = createStructuredSelector({
    isFetching: isCollectionFetching(),
    isCollectionsLoaded: isCollectionsLoaded()
})

export const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
