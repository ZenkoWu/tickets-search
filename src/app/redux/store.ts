import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './features/cart'
import {logger} from './middlewares/logger'
import { movieApi } from './services/movieApi'
import { cinemaApi } from './services/cinemaApi'
import { reviewsApi } from './services/reviewsApi'

export type TState = {
    cart: {
        ticketsCount: number,
        tickets: {key: number}[]
    }
}

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [movieApi.reducerPath]: movieApi.reducer, 
        [reviewsApi.reducerPath]: reviewsApi.reducer, 
        [cinemaApi.reducerPath]: cinemaApi.reducer, 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        movieApi.middleware, 
        cinemaApi.middleware, 
        reviewsApi.middleware, 
        logger
    ])
})

console.log(store.getState())