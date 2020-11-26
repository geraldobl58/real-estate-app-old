import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Properties from '../pages/Properties';
import Property from '../pages/Property';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/properties" component={Properties} />
      <Route exact path="/property/:id" component={Property} />
    </Switch>
  );
}
