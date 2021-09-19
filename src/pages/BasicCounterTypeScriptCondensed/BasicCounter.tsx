import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux';

interface CounterActionInterface {
  type: string;
}

function getDefaultCounterState() {
  return {
    count: 0,
  };
}

function counterReducer(
  state = getDefaultCounterState(),
  action: CounterActionInterface,
) {
  const { type } = action;

  switch (type) {
    case 'counter/increase':
      return { count: state.count + 1 };
    case 'counter/decrease':
      return { count: state.count - 1 };
    case 'counter/reset':
      return getDefaultCounterState();
    default:
      return state;
  }
}

const counterStore = createStore(counterReducer);
counterStore.subscribe(() => console.log(counterStore.getState()));

type CounterRootStateType = ReturnType<typeof counterStore.getState>;

function selectCount() {
  return useSelector((state: CounterRootStateType) => state.count);
}

export default function BasicCounter() {
  const dispatch = useDispatch();
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
