import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { booksReducer } from './booksSlice';
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
import { filterReducer } from './filterBooksSlice';
import { readFilterReducer } from './readFilterSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['books'],
};

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
  isRead: readFilterReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
