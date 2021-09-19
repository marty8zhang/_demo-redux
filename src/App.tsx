import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import FancyCounter from './pages/FancyCounter/FancyCounter';
import BasicCounter from './pages/BasicCounter/BasicCounter';
import counterStore from './pages/BasicCounter/counterStore';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/basic-counter">
          <Provider store={counterStore}>
            <BasicCounter />
          </Provider>
        </Route>
        <Route path="/fancy-counter">
          <FancyCounter />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
