import React from 'react';
import './shop.styles.scss';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import { Route } from 'react-router-dom';
import CollectionContainer from '../collection/collection.container';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

class Shop extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page' >
                <Route exact path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route exact path={`${match.path}/:collectionId`}
                    component={CollectionContainer}
                />
            </div>
        );
    };

}

export const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(Shop);
