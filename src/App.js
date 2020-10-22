import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BrowsePage, Home, SignIn, SignUp } from './pages';
import * as ROUTES from './constants/route';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home}></Route>
        <Route exact path={ROUTES.SIGN_IN} component={SignIn}></Route>
        <Route exact path={ROUTES.SIGN_UP} component={SignUp}></Route>
        <Route exact path={ROUTES.BROWSE} component={BrowsePage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
