'use client'

import Filter from './_components/Filter/Filter'
import s from './page.module.css'
import { MovieList } from './_components/MoviesList/MoviesList'

export default function Home() {
   
    return (
        <main className={s.mainWrapper}>
            <Filter/>
            <MovieList/>
        </main>
    )
} 
