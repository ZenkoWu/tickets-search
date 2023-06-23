'use client'
import Link from "next/link";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import s from './FilmCard.module.css'
import { useSelector } from "react-redux";
type TFilmCard = {
    id: string,
    title: string,
    posterUrl: string,
    genre: string

}
const FilmCard = ({title, posterUrl, genre, id}: TFilmCard) => {
    
    return (
        <div className={`backgroundTemplate d-flex align-start justify-content-between ${s.card}`}>
            <Link href={`/movies/${id}`} style={{width:'100%'}}>
                <div className="d-flex align-start"> 
                    <img src={posterUrl} alt={title} className={s.img}/>
                    <div className={s.title}>
                        <p className="fw-600 fs20">{title}</p>
                        <p className={s.genre}>{genre}</p>
                    </div>
                </div>
            </Link>  
        
            <ButtonGroup movieId={id}/>
        </div>
    )
}
export default FilmCard;
