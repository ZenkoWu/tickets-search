'use client'

import Filter from './_components/Filter/Filter'
import s from './page.module.css'
import { MovieList, genresRu } from './_components/MoviesList/MoviesList'
import { useGetCinemaMoviesQuery, useGetMoviesQuery } from './redux/services/movieApi'
import { useReducer, useState } from 'react'
import { useGetCinemasQuery } from './redux/services/cinemaApi'

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

    let {data, isLoading, error} = useGetMoviesQuery()
    console.log(data)
    const onNameChange = (payload) => dispatch({type: 'setMovieName', payload})
    
    const onGenreSet =(payload) => dispatch({type: 'setGenre', payload})

    const onCinemaSet =(payload) => dispatch({type: 'setCinema', payload})
    let movie = data;

    // if(state.cinema) {
        let {data: data2} = useGetCinemaMoviesQuery(state.cinema?.id)
        movie = data2;
        // movie = movie?.filter(el => genresRu[el.genre] == state.genre)
    // }

     movie = movie?.filter(el =>el?.title.toLowerCase().includes(state.movieName?.toLowerCase().trim()))

    if(state.genre?.name && state.genre?.name != 'Не выбран') {
        movie = movie?.filter(el => genresRu[el.genre] == state.genre.name)
    }

    // if(state.cinema) {
    //     let {data} = useGetCinemaMoviesQuery(state.cinema)
    //     // movie = movie?.filter(el => genresRu[el.genre] == state.genre)
    // }
    
    // let {data: data2} = useGetCinemasQuery()
    
    //     console.log(data2)
    
    
   
    return (
        <main className={s.mainWrapper}>
            <Filter 
                name={state.movieName} 
                setName={onNameChange}
                cinema={state.cinema}
                setCinema={onCinemaSet}
                genre={state.genre}
                setGenre={onGenreSet}
                />
            <MovieList 
                data={movie} 
                isLoading={isLoading} 
                error={error}
            />
        </main>
    )
} 
