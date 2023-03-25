// import { configureStore } from '@reduxjs/toolkit';
// import { authSlice } from './auth/authSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { transactionsSlice } from './transactions/transactionsSlice';
// import reportsReducer from './reports/reports-slice';

// const authPersistConfig = {
//   key: 'userAuth',
//   storage,
//   whitelist: ['accessToken', 'refreshToken', 'sid', 'userData'],
// };

// const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authSlice.reducer),
//     transactions: transactionsSlice.reducer,
//     reports: reportsReducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   ],
// });

// const persistor = persistStore(store);

// export { store, persistor };
