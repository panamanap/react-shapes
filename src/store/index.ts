import { rootReducer } from './reducers/index';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistedState = localStorage.getItem('ReactShapes')
    ? JSON.parse(localStorage.getItem('ReactShapes') || '')
    : [];

export const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools()
);

store.subscribe(() => {
    localStorage.setItem('ReactShapes', JSON.stringify(store.getState()));
});
