"use client";

import { useGetMovieQuery } from "@/app/redux/services/movieApi";
import s from './page.module.css'
import ButtonGroup from "@/app/_components/ButtonGroup/ButtonGroup";
import { Reviews } from "@/app/_components/Reviews/Reviews";
import Preloader from "@/app/_components/Preloader/Preloader";
import { genresRu } from "@/app/_components/MoviesList/MoviesList";

type TFilmData = {
    description: string,
    director: string,
    genre: string, // 'fantasy' | 'comedy' | 'horror' | 'action'
    id: string,
    rating: number,
    releaseYear: number,
    reviewIds: string[],
    title: string,
    posterUrl: string,
}

const FilmDescription = (props: any) => { 
    const {data, isLoading, error} = useGetMovieQuery(props.params.id)
    if(isLoading) {
        return <Preloader/>
    }
    // console.log(data)
    return ( 
        <div className='d-flex flex-column gap-24'>
            <div className="backgroundTemplate d-flex gap-24">
                <img src={data.posterUrl} alt="" className={s.poster} />

                <div className='d-flex flex-column gap-24'>
                    <div className='mainInfo'>
                        <div className='d-flex justify-content-between' style={{marginBottom: '32px'}}>
                            <h2 className='fw-600'>{data.title}</h2>
                            <ButtonGroup movieId={data.id}/>
                        </div>

                        <div className='d-flex flex-column gap-24 fs20'>
                            <p>
                                <span className='fw-600'>Жанр: </span> 
                                {genresRu[data.genre as keyof typeof genresRu]}
                            </p>
                            <p>
                                <span className='fw-600'>Год выпуска: </span> 
                                {data.releaseYear}
                            </p>
                            <p>
                                <span className='fw-600'>Рейтинг: </span> 
                                {data.rating}
                            </p>
                            <p>
                                <span className='fw-600'>Режиссер: </span> 
                                {data.director}
                            </p>
                        </div>
                    </div>
                    
                    <div className='description d-flex flex-column gap-24'>
                        <p className='fs20 fw-600'>Описание</p>
                        <p>
                            {data.description}
                        </p>
                    </div>

                </div> 
            </div>
            
            <div className='reviews d-flex flex-column gap-24'>
                <Reviews movieId={data.id}/>
            </div>
        </div>
    )
}

export default FilmDescription;


// todo вынести в константы списки для мапа 