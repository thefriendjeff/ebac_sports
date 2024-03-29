import { configureStore } from "@reduxjs/toolkit";

import carrinhoReducer from './reducers/carrinho';

import { produtosApi } from '../services/produtosApi';

const store = configureStore({
    reducer: {
      carrinho: carrinhoReducer,
      [produtosApi.reducerPath]: produtosApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware),
});