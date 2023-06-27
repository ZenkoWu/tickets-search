'use client'

import Filter from './_components/Filter/Filter'
import s from './page.module.css'
import { useReducer } from 'react'
import { MovieList } from './_components/MoviesList/MoviesList'

const reducer = (state, {type, payload}) => {
    switch(type){
        case 'setMovieName': 
        return {
             ...state,
            movieName: payload
        }
        case 'setGenre': 
        return {
            ...state,
            genre: {
                id: payload.id,
                name: payload.id
            }
        }
        case 'setCinema': 
        return {
            ...state,
            cinema: {
                id: payload.id,
                name: payload.name
            }
        }
        default: return state;
    }
}
const initialState = {
    movieName: '',
    genre: null, 
    cinema: null

}
export default function Home() {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <main className={s.mainWrapper}>
            <Filter 
                dispatch={dispatch}
                state={state}
            />
            <MovieList
                state={state}
            />
        </main>
    )
} 
