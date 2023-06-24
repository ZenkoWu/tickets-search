'use client'

import Filter from './_components/Filter/Filter'
import s from './page.module.css'
import { MovieList } from './_components/MoviesList/MoviesList'
import { useGetMoviesQuery } from './redux/services/movieApi'
import { useState } from 'react'

export default function Home() {
    let {data, isLoading, error} = useGetMoviesQuery()
    const [name, setName] = useState()
   
    return (
        <main className={s.mainWrapper}>
            <Filter/>
            <MovieList data={data} isLoading={isLoading} error={error}/>
        </main>
    )
} 
