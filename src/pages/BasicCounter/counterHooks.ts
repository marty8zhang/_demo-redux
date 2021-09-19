import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { CounterAppDispatchType, CounterRootStateType } from './counterStore';

export const useAppDispatch = () => useDispatch<CounterAppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<CounterRootStateType> = useSelector;
