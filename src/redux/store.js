import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
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

const authPersistConfig = {
  key: 'userAuth',
  storage,
  whitelist: ['sid', 'refreshToken'],
};

export const store = configureStore({
  reducer: {
    // auth: authSlice.reducer,
    auth: persistReducer(authPersistConfig, authSlice.reducer),
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

export const persistor = persistStore(store);
