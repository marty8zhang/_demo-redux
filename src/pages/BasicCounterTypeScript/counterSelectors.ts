import { CounterRootStateType } from './counterStore';
import { useAppSelector } from './counterHooks';

export function selectCount() {
  return useAppSelector((state: CounterRootStateType) => state.count);
}
