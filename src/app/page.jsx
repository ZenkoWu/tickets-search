'use client'

import Filter from './_components/Filter/Filter'
import s from './page.module.css'
import { useGetCinemaMoviesQuery, useGetMoviesQuery } from './redux/services/movieApi'
import { useReducer } from 'react'
import genresRu from './genresRu'
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

    let {data, isLoading, error} = useGetMoviesQuery()
   
    const onNameChange = (payload) => dispatch({type: 'setMovieName', payload})

    // const onNameChange = (dispatch) => (payload) => dispatch({type: 'setMovieName', payload})
    
    const onGenreSet =(payload) => dispatch({type: 'setGenre', payload})

    const onCinemaSet =(payload) => dispatch({type: 'setCinema', payload})
    let movie = data;
    
        let {data: data2, status} = useGetCinemaMoviesQuery(state.cinema?.id)
        console.log({status})
        movie = data2;
        
     movie = movie?.filter(el =>el?.title.toLowerCase().includes(state.movieName?.toLowerCase().trim()))

    if(state.genre?.name && state.genre?.name != 'Не выбран') {
        movie = movie?.filter(el => genresRu[el.genre] == state.genre.name)
    }
   
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
                status={status}
            />
        </main>
    )
} 
