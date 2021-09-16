import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import FancyCounter from './FancyCounter';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <FancyCounter />
    </Provider>,
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
