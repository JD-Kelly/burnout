import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Splash from './components/Splash';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Results from './components/Results';

const App = () => (
  <Router>
  <Switch>
    <Route exact path="/" component={Splash} />
    <Route exact path="/1" component={Question1} />
    <Route exact path="/2" component={Question2} />
    <Route exact path="/3" component={Question3} />
    <Route exact path="/results" component={Results} />
  </Switch>
</Router>
);

export default App;
