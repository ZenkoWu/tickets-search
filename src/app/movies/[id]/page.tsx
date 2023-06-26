"use client";

import { useGetMovieQuery } from "@/app/redux/services/movieApi";
import s from './page.module.css'
import ButtonGroup from "@/app/_components/ButtonGroup/ButtonGroup";
import { Reviews } from "@/app/_components/Reviews/Reviews";
import Preloader from "@/app/_components/Preloader/Preloader";
import genresRu from '../../genresRu'
import Image from "next/image";

export type TFilmData = {
    description: string,
    director: string,
    genre: 'fantasy' | 'comedy' | 'horror' | 'action'
    id: string,
    rating: number,
    releaseYear: number,
    reviewIds: string[],
    title: string,
    posterUrl: string,
}
type TFilmDescription = {
    params: {
        id: string
    }
}
const FilmDescription = (props: TFilmDescription) => {
    const {data, isLoading} = useGetMovieQuery(props.params.id)

    if(isLoading) {
        return <Preloader/>
    }

    return ( 
        <div className='d-flex flex-column gap-24'>
            <div className="backgroundTemplate d-flex gap-24">
                <Image
                    src={data.posterUrl}
                    alt="poster"
                    className={s.poster}
                    width={400}
                    height={500}
                />
            
                <div className='d-flex flex-column gap-24'>
                    <div>
                        <div className='d-flex justify-content-between mb-32'>
                            <h2 className='fw-600'>{data.title}</h2>
                            <ButtonGroup movieId={data.id} isRemovable={false}/>
                        </div>

                        <div className='d-flex flex-column gap-24 fs20'>
                            <p>
                                <span className='fw-600'>Жанр: </span> 
                                {genresRu[data.genre as TFilmData['genre']]}
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
                    
                    <div className='d-flex flex-column gap-24'>
                        <p className='fs20 fw-600'>Описание</p>
                        <p>
                            {data.description}
                        </p>
                    </div>

                </div> 
            </div>
            
            <div className='d-flex flex-column gap-24'>
                <Reviews movieId={data.id}/>
            </div>
        </div>
    )
}

export default FilmDescription;
