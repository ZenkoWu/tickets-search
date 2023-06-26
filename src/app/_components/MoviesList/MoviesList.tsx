import { TFilmData } from "@/app/movies/[id]/page"
import genresRu from "../../genresRu"
import FilmCard from "../FilmCard/FilmCard"
import Preloader from "../Preloader/Preloader"

type TMovieList = {
    data: TFilmData[], 
    isLoading: boolean, 
    error: boolean, 
    status: 'pending' | 'fulfilled'
}
 
export const MovieList = ({data, isLoading, error, status}: TMovieList) => { 
    if(isLoading || status == 'pending') {
        return <Preloader/>
    }
    if(!data || error) {
        return <div>Данные не найдены</div>
    }

    return (
        <div className='d-flex flex-column gap-16' >
            {
                data && data.map((el: TFilmData) => 
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
