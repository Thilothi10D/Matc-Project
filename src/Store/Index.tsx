import { configureStore, combineReducers } from '@reduxjs/toolkit';
import loggin from './LoginReducers';
import modal from './ModalReducer';

const rootReducer = combineReducers({
    loggin: loggin,
    modal:modal,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
