import { moviesActions } from "@/app/redux/features/movies"
import { useGetMoviesQuery } from "@/app/redux/services/movieApi"
import { useDispatch, useSelector } from "react-redux"
import FilmCard from "../FilmCard/FilmCard"
import Preloader from "../Preloader/Preloader"

export const genresRu = {
    action: 'Боевик',
    comedy: 'Комедия',
    fantasy: 'Фэнтези',
    horror: 'Ужасы',
}

export const MovieList = ({data, isLoading, error }) => { 
    if(isLoading) {
        return <Preloader/>
    }
    if(!data || error) {
        return <div>'Данные не найдены'</div>
    }

    return (
        <div className='d-flex flex-column gap-16' >
            {
                data && data.map((el) => 
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

//todo создать компонент муви лист с контейнером для главной и корзины!!!!