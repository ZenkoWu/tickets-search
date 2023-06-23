import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './features/cart'
import { moviesReducer } from './features/movies'
import {logger} from './middlewares/logger'
import { movieApi } from './services/movieApi'
import { cinemaApi } from './services/cinemaApi'
import { reviewsApi } from './services/reviewsApi'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        movies: moviesReducer,
        [movieApi.reducerPath]: movieApi.reducer, 
        [reviewsApi.reducerPath]: reviewsApi.reducer, 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        movieApi.middleware, 
        cinemaApi.middleware, 
        reviewsApi.middleware, 
        logger
    ])
})

console.log(store.getState())