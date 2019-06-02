import React, { Fragment } from 'react';
import GameList from './components/GameList';
import { Switch, Route } from 'react-router-dom';
import Promo from './components/Promo';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={GameList} />
        <Route path="/jeu/promo/:id" component={Promo} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
