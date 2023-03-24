import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import transactionsReducer from './transaction/transactions-slice';
import authReducer from './auth/auth-slice';
import storage from 'redux-persist/lib/storage';
import categoriesReducer from './categories/catrgories-slice';
import reportsReducer from './reports/reports-slice';
import dateReducer from './date/date-slice';
//--------------------------------------------------------------------------//

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

const persistConfigAuth = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid', 'userData'],
};

// const persistConfigTransaction= {
//   key: 'transaction',
//   storage,
//   whitelist: ['accessToken', 'refreshToken', 'sid', 'userData'],
// };

const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfigAuth, authReducer),
    transactions: transactionsReducer,
    categories: categoriesReducer,
    reports: reportsReducer,
    date: dateReducer,
  },

  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };

// const persistedReducer = persistedReducer(persistConfig, authReducer);
