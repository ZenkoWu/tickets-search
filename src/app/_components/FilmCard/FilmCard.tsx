'use client'
import Link from "next/link";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import s from './FilmCard.module.css'
import { useSelector } from "react-redux";
import Image from "next/image";
type TFilmCard = {
    id: string,
    title: string,
    posterUrl: string,
    genre: string,
    isRemovable: boolean

}
const FilmCard = ({title, posterUrl, genre, id, isRemovable}: TFilmCard) => {
    
    return (
        <div className={`backgroundTemplate d-flex align-start justify-content-between ${s.card}`}>
            {/* <Link href={`/movies/${id}`} style={{width:'100%'}}> */}
                <div className="d-flex align-start"> 
                    <img src={posterUrl} alt={title} className={s.img}/>
                    <div className={s.title}>
                    <Link href={`/movies/${id}`} style={{width:'100%', color:'black'}}>
                        <p className="fw-600 fs20">{title}</p>
                        </Link>  
                        <p className={s.genre}>{genre}</p>
                    </div>
                </div>
            {/* </Link>   */}
            <div className="d-flex gap-24 align-center">
            <ButtonGroup movieId={id}/>
                { isRemovable &&
                    <Image
                        className='pointer'
                        src={'close.svg'}
                        alt="close"
                        width={20}
                        height={20}
                        priority
                    />
                }
            </div>
        </div>
    )
}
export default FilmCard;
