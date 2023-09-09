import {configureStore} from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {authReducer} from './authReduxe';
import {phoneDetailsReducer} from './contactReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore ({
  reducer: {
    auth: persistReducer (authPersistConfig, authReducer),
    phoneDetails: phoneDetailsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware ({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore (store);
