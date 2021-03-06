import React from 'react';
//import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import ContactPage from './pages/contact/contact.component';
import PageNotFound from './pages/page-not-found/page-not-found.component';

import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({ currentUser: user });
      //createUserProfileDocument(user);
      //console.log(user);

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //console.log(userRef)
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <React.StrictMode>
          <Header />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/checkout' exact component={CheckoutPage} />
            <Route path='/contact' exact component={ContactPage} />
            <Route
              exact
              path='/signin'
              render={() =>
                this.props.currentUser ?
                  (<Redirect to='/' />) :
                  (<SignInAndSignUpPage />)} />
            <Route path='/shop' component={Shop} />
            <Route path='*' render={() => <PageNotFound countdown='10' />} />
          </Switch>
        </React.StrictMode>
        <NotificationContainer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps
  , mapDispatchToProps
)(App);
