import { moviesActions } from "@/app/redux/features/movies"
import { useGetMoviesQuery } from "@/app/redux/services/movieApi"
import { useDispatch, useSelector } from "react-redux"
import FilmCard from "../FilmCard/FilmCard"

export const MovieList = () => { 
    // let dispatch = useDispatch()
    // let movies = useSelector((state) => state.movies)
    let {data, isLoading, error} = useGetMoviesQuery()
    console.log(data)

    if(isLoading) {
        return <div>Загрузка фильмов...</div>
    }
    if(!data || error) {
        return <div>'Данные не найдены'</div>
    }
    //  else {
    //     dispatch(moviesActions.getMovies(data))
    // }

    return (
        <div className='d-flex flex-column gap-16' >
            {
                data && data.map((el) => 
                    <FilmCard
                        isRemovable={false}
                        key={el.id}
                        title={el.title} 
                        posterUrl={el.posterUrl}
                        genre={el.genre}
                        id={el.id}
                    />
                )
            }     
        </div>
    )
}

//todo создать компонент муви лист с контейнером для главной и корзины!!!!