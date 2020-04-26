import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const updateCollections = collections => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collections
})

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsStartAsync = () => {
    //it's returning a function
    return dispatch => {
        dispatch(fetchCollectionsStart())
        const collectionRef = firestore.collection('collections')
        collectionRef
            .get()
            .then(async snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionsMap))
            })
            .catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsSuccess = (data) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: data
})