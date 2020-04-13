import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD09J7NRpnXFzX8J2adgFo9Lua32XCVPPo",
    authDomain: "e-commerce-4ef1f.firebaseapp.com",
    databaseURL: "https://e-commerce-4ef1f.firebaseio.com",
    projectId: "e-commerce-4ef1f",
    storageBucket: "e-commerce-4ef1f.appspot.com",
    messagingSenderId: "402998536681",
    appId: "1:402998536681:web:56cf35e23a73185e7f4378",
    measurementId: "G-7QHWYW46CB"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    //console.log(snapShot);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmpt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;