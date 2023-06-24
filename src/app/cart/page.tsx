'use client'
import { useSelector } from "react-redux";
import DeleteTicket from "../_components/Modal/DeleteTicket/DeleteTicket";
import FilmCard from "../_components/FilmCard/FilmCard";
import { TicketsCount } from "./TicketsCount/TicketsCount";

const Cart = () => {
    let tickets = useSelector((state: any) => state.cart.tickets)
    let movies = useSelector((state: any) => state.movies)
    let result = movies.filter((el:any) => tickets[el.id])
    return (
        <div className='d-flex flex-column gap-16' style={{height:'100%'}}>
            <div style={{flex:'1 1 auto', height:'100%'}} className="border d-flex flex-column gap-16">
                {result.map((el:any) => 
                    <FilmCard
                        isRemovable
                        key={el.id}
                        title={el.title} 
                        posterUrl={el.posterUrl}
                        genre={el.genre}
                        id={el.id}
                    />
                )}
            </div>
            <div style={{flex:'0 0 auto'}}>
                <TicketsCount/>
            </div>
            {/* <DeleteTicket/> */}

        </div>
    )
}
export default Cart;