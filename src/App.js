import React, { Fragment } from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import './App.css';
import './sass/main.scss';

import HomePage from './pages/home-page';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/BookingApp' component={HomePage} />
      </Switch>
    </Fragment>
  );
}

export default App;
