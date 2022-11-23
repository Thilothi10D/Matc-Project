import { configureStore, combineReducers } from '@reduxjs/toolkit';
import loggin from './LoginReducers';

const rootReducer = combineReducers({
    loggin: loggin,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
