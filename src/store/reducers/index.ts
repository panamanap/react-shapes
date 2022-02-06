import { modal } from './modal';
import { shapes } from './shapes';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    shapes,
    modal,
});

export type RootState = ReturnType<typeof rootReducer>;
