'use client'
import Link from "next/link";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import s from './FilmCard.module.css'
import { useSelector } from "react-redux";
import Image from "next/image";
import { useState } from "react";
import DeleteTicket from "../Modal/DeleteTicket/DeleteTicket";
import { createPortal } from "react-dom";

type TFilmCard = {
    id: string,
    title: string,
    posterUrl: string,
    genre: string,
    isRemovable: boolean

}
const FilmCard = ({title, posterUrl, genre, id, isRemovable}: TFilmCard) => {
    const [opened, setOpened] = useState(false)
    const onDelete= () => {

    }
    return (
        <div className={`backgroundTemplate d-flex align-start justify-content-between ${s.card}`}>
                <div className="d-flex align-start"> 
                    <img src={posterUrl} alt={title} className={s.img}/>
                    <div className={s.title}>
                    <Link href={`/movies/${id}`} style={{width:'100%', color:'black'}}>
                        <p className="fw-600 fs20">{title}</p>
                        </Link>  
                        <p className={s.genre}>{genre}</p>
                    </div>
                </div>
            <div className="d-flex gap-24 align-center">
            <ButtonGroup movieId={id}/>
                { isRemovable &&
                    <Image
                        className='pointer'
                        src={'/icons/close.svg'}
                        alt="close"
                        width={20}
                        height={20}
                        priority
                        onClick={() => setOpened(prev => !prev)}
                    />
                }
                {opened && createPortal(<DeleteTicket opened={opened} setOpened={setOpened} movieId={id}/>, document.body)}
            </div>
        </div>
    )
}
export default FilmCard;
// todo пересмотреть пораталы!!!