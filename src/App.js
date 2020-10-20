import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages';
import * as ROUTES from './constants/route';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
