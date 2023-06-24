'use client'
import { useSelector } from "react-redux";
import DeleteTicket from "../_components/Modal/DeleteTicket/DeleteTicket";
import FilmCard from "../_components/FilmCard/FilmCard";
import { TicketsCount } from "./TicketsCount/TicketsCount";
import { useGetMovieQuery, useGetMoviesForCartQuery } from "../redux/services/movieApi";



const Cart = () => {
    let tickets = useSelector((state) => state.cart.tickets)
    console.log(tickets)
    let result =[]
    let ids = Object.keys(tickets)
    let {data, isLoading} = useGetMoviesForCartQuery(ids,  useGetMovieQuery)
    
    if(!data) {
        return <div>Wait...</div>
    }
    // let results = getCartMovies(ids)
    setTimeout(() => console.log(data), 2000)
    
    // let data = useGetMovieQuery(ids[0])
    // console.log(data)
    // if(isLoading) {
    //     return <div>Загрузка корзины...</div>
    // }
    // let results:any = [data]
    // console.log(results)

    // let results = ids.map(id=>useGetMovieQuery(id).data)
    // console.log(results)
    
    // Promise.all(results).then(data => result.push(data))
    // console.log(result)
    // for(let id of ids) {
    //     let data = useGetMovieQuery(id)
    //     console.log(data)
    //     result.push(data.data)
    // }
    // let movies = useSelector((state: any) => state.movies)
    // let result = movies.filter((el:any) => tickets[el.id])
    // console.log(result)
    return (
        <div className='d-flex flex-column gap-16' style={{height:'100%'}}>
            <div style={{flex:'1 1 auto', height:'100%'}} className=" d-flex flex-column gap-16">
                {data.map((el) => 
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