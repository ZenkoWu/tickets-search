'use client'
import { useSelector } from "react-redux";
import FilmCard from "../_components/FilmCard/FilmCard";
import { TicketsCount } from "./TicketsCount/TicketsCount";
import { useGetMovieQuery, useGetMoviesForCartQuery } from "../redux/services/movieApi";
import Preloader from "../_components/Preloader/Preloader";
import { selectCartModule } from "../redux/features/cart/selector";
import genresRu from "../genresRu";

const Cart = () => {
    const {tickets, ticketsCount} = useSelector((state) => selectCartModule(state))
    
    const ids = Object.keys(tickets)
    const {data} = useGetMoviesForCartQuery(ids,  useGetMovieQuery)
    
    if(!data && ticketsCount > 0) {
        return <Preloader/>
    }

    return (
        <div className='d-flex flex-column gap-16' style={{height:'100%'}}>
            <div style={{flex:'1 1 auto', height:'100%', minHeight: 'calc(80vh - 80px)'}} className="d-flex flex-column gap-16">
                { 
                    data && ticketsCount > 0 ?
                    data.map((el) => 
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
            <div className='' style={{flex:'0 0 auto'}}>
                <TicketsCount/>
            </div>

        </div>
    )
}
export default Cart;