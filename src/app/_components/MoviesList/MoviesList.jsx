import genresRu from "../../genresRu"
import FilmCard from "../FilmCard/FilmCard"
import Preloader from "../Preloader/Preloader"

export const MovieList = ({data, isLoading, error , status}) => { 
    if(isLoading || status == 'pending') {
        return <Preloader/>
    }
    if(!data || error) {
        return <div>Данные не найдены</div>
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