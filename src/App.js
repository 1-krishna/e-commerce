import React from 'react';
//import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path="/shop" exact component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
