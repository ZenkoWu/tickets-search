'use client'
import Link from "next/link";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import s from './FilmCard.module.css'
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
            <div className="d-flex align-start"> 

                <Image
                    src={posterUrl}
                    alt={title}
                    className={s.img}
                    width={100}
                    height={120}
                />

                <div className={s.title}>
                    <Link href={`/movies/${id}`} className='w-100 text-dark'>
                        <p className="fw-600 fs20">{title}</p>
                    </Link>  
                    <p className={s.genre}>{genre}</p>
                </div>
            </div>

            <div className="d-flex gap-24 align-center">
                <ButtonGroup 
                    movieId={id} 
                    isRemovable={isRemovable}
                />
            </div>
        </div>
    )
}
export default FilmCard;

// todo пересмотреть пораталы!!!