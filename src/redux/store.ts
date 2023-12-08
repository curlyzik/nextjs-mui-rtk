import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer } from 'redux-persist';
import customStorage from './cutomStorage';
import { customLogger } from './middlewares/customLogger';
import { rtkQueryErrorLogger } from './middlewares/rtkQueryErrorLogger';
import authSlice from './slices/authSlice';
import { jsonPlaceHolderApi } from '@/api/baseQueries';

const rootReducer = combineReducers({
  auth: authSlice,
});

const persistedReducers = persistReducer(
  {
    key: 'nextjs/mui', //Update KEY
    version: 1,
    storage: customStorage,
  },
  rootReducer
);

const middleWares = [
  rtkQueryErrorLogger,
  customLogger,
  jsonPlaceHolderApi.middleware,
];

export const store = configureStore({
  reducer: {
    [jsonPlaceHolderApi.reducerPath]: jsonPlaceHolderApi.reducer,
    persistedReducers,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      middleWares
    );
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
