'use client'

import Filter from './_components/Filter/Filter'
import s from './page.module.css'
import { MovieList } from './_components/MoviesList/MoviesList'
import { useGetMoviesQuery } from './redux/services/movieApi'
import { useState } from 'react'

export default function Home() {
    let {data, isLoading, error} = useGetMoviesQuery()
    const [name, setName] = useState('')

    data = data?.filter(el => el?.title.toLowerCase().includes(name?.toLowerCase()))
    console.log(name)
    console.log(data)
   
    return (
        <main className={s.mainWrapper}>
            <Filter name={name} setName={setName}/>
            <MovieList data={data} isLoading={isLoading} error={error}/>
        </main>
    )
} 
