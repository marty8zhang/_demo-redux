import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FancyCounterPage from './pages/FancyCounter/FancyCounterPage';
import BasicCounterPage from './pages/BasicCounterTypeScript/BasicCounterPage';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/basic-counter">
          <BasicCounterPage />
        </Route>
        <Route path="/fancy-counter">
          <FancyCounterPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
