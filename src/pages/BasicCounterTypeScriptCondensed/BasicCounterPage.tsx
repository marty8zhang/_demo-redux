import React from 'react';
import { Provider } from 'react-redux';
import BasicCounter from './BasicCounter';
import counterStore from '../BasicCounterTypeScript/counterStore';

export default function BasicCounterPage() {
  // `<Provider />` must wrap around the whole component, not just the component's returned
  // DOM tree.
  return (
    <Provider store={counterStore}>
      <BasicCounter />
    </Provider>
  );
}
