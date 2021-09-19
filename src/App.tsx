import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FancyCounterPage from './pages/FancyCounter/FancyCounterPage';
import BasicCounterPageTS from './pages/BasicCounterTypeScript/BasicCounterPage';
import BasicCounterPageTSCondensed from './pages/BasicCounterTypeScriptCondensed/BasicCounterPage';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/basic-counter-typescript">
          <BasicCounterPageTS />
        </Route>
        <Route path="/basic-counter-typescript-condensed">
          <BasicCounterPageTSCondensed />
        </Route>
        <Route path="/fancy-counter">
          <FancyCounterPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
