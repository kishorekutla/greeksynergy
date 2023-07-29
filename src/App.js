import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import MovieListPage from './components/MovieListPage';

const App = () => {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/movies" component={MovieListPage} />
      </Switch>
    </Router>
  );
};

export default App;


