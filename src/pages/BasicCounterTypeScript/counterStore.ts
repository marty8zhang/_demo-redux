import { createStore } from 'redux';
import counterReducer from './counterReducer';

const counterStore = createStore(counterReducer);

export type CounterRootStateType = ReturnType<typeof counterStore.getState>;
export type CounterAppDispatchType = typeof counterStore.dispatch;

counterStore.subscribe(() => console.log(counterStore.getState()));

export default counterStore;
