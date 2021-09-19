import React from 'react';
import { selectCount } from './counterSelectors';
import { useAppDispatch } from './counterHooks';

export default function BasicCounter() {
  const dispatch = useAppDispatch();
  const count = selectCount();

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
