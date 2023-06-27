import { TFilmData } from "@/app/movies/[id]/page"
import genresRu from "../../genresRu"
import FilmCard from "../FilmCard/FilmCard"
import Preloader from "../Preloader/Preloader"
import { useGetCinemaMoviesQuery, useGetMoviesQuery } from "../../redux/services/movieApi"

type TMovieList = {
    data: TFilmData[], 
    isLoading: boolean, 
    error: boolean, 
    status: 'pending' | 'fulfilled',
    state: any
}
 
export const MovieList = ({ state}: TMovieList) => {
    // let {data, isLoading, error} = useGetMoviesQuery('') 
    let {data: movie, status, isError} = useGetCinemaMoviesQuery(state.cinema?.id) 
    
    if( status == 'pending') {
        return <Preloader/>
    }
    if(!movie || isError) {
        return <div>Данные не найдены</div>
    }

    // let movie = data;
    
    // if(data2 && state.cinema?.name != 'Не выбран') {
    //     movie = data2 
    // }
       
    movie = movie?.filter((el: TFilmData) => 
        el?.title.toLowerCase().includes(state.movieName?.toLowerCase().trim()))

    if(state.genre?.name && state.genre?.name != 'Не выбран') {
        movie = movie?.filter((el: TFilmData)=> genresRu[el.genre] == state.genre.name)
    }

    return (
        <div className='d-flex flex-column gap-16' >
            {
                movie && movie.map((el: TFilmData) => 
                    <FilmCard
                        isRemovable={false}
                        key={el.id}
                        title={el.title} 
                        posterUrl={el.posterUrl}
                        genre={genresRu[el.genre]}
                        id={el.id}
                    />
                )
            }     
        </div>
    )
}
