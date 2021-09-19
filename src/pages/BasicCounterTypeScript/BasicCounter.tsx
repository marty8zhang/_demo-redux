import React from 'react';
import { selectCount } from './counterSelectors';
import { useAppDispatch } from './counterHooks';

export default function BasicCounter() {
  const dispatch = useAppDispatch();
  // Without using a selector (the `useSelector()` hook), the DOM tree won't be updated by state.
  const count = selectCount();
  // The below line won't work.
  // const { count } = counterStore.getState();

  return (
    <div>
      <p>
        <strong>Count:</strong>
        {count}
      </p>
      <p>
        <button
          type="button"
          onClick={() => dispatch({ type: 'counter/increase' })}
        >
          Increase
        </button>
        {' '}
        <button
          type="button"
          onClick={() => dispatch({ type: 'counter/decrease' })}
        >
          Decrease
        </button>
        {' '}
        <button
          type="button"
          onClick={() => dispatch({ type: 'counter/reset' })}
        >
          Reset
        </button>
      </p>
    </div>
  );
}
