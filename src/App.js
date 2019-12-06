import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import { Container, } from 'semantic-ui-react';

const App = () => (
<div>
<Navbar />
  <Container>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route component={NoMatch} />
    </Switch>
  </Container>
</div>
)
export default App;
