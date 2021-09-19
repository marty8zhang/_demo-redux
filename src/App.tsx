import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FancyCounter from './pages/FancyCounter/FancyCounter';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/fancy-counter">
          <FancyCounter />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
