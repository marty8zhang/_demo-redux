import { CounterRootStateType } from './counterStore';

export function selectCount(state: CounterRootStateType) {
  return state.count;
}
