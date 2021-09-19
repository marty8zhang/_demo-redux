interface CounterActionInterface {
  type: string;
}

function getDefaultCounterState() {
  return {
    count: 0,
  };
}

export default function counterReducer(
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
