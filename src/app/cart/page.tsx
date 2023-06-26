'use client'
import { useSelector } from "react-redux";
import FilmCard from "../_components/FilmCard/FilmCard";
import { TicketsCount } from "./TicketsCount/TicketsCount";
import { useGetMoviesForCartQuery } from "../redux/services/movieApi";
import Preloader from "../_components/Preloader/Preloader";
import { selectCartModule } from "../redux/features/cart/selector";
import genresRu from "../genresRu";
import s from './page.module.css'
import { TState } from "../redux/store";
import { TFilmData } from "../movies/[id]/page";

const Cart = () => {
    const {tickets, ticketsCount} = useSelector((state: TState) => selectCartModule(state))
    
    const ids = Object.keys(tickets)

    const {data} = useGetMoviesForCartQuery(ids)
    
    if(!data && ticketsCount > 0) {
        return <Preloader/>
    }

    return (
        <div className='d-flex flex-column gap-16 h-100'>
            <div className={`d-flex flex-column gap-16 h-100 ${s.contentWrapper}`}>
                { 
                    data && ticketsCount > 0 ?
                        data.map((el: TFilmData) => 
                            <FilmCard
                                isRemovable
                                key={el.id}
                                title={el.title} 
                                posterUrl={el.posterUrl}
                                genre={genresRu[el.genre]}
                                id={el.id}
                            />
                        ) 
                    : 
                        <p className='fs20 fw-600'>
                            Билетов пока нет
                        </p>
                }
               
            </div>
            <div className={s.result}>
                <TicketsCount ticketsCount={ticketsCount} />
            </div>
        </div>
    )
}

export default Cart;