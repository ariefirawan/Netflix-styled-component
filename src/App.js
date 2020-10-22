import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, SignIn } from './pages';
import * as ROUTES from './constants/route';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home}></Route>
        <Route exact path={ROUTES.SIGN_IN} component={SignIn}></Route>
      </Switch>
    </Router>
  );
}

export default App;
