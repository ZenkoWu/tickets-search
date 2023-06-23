import Link from "next/link";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import s from './FilmCard.module.css'
type TFilmCard = {
    id: string,
    title: string,
    posterUrl: string,
    genre: string

}
const FilmCard = ({title, posterUrl, genre, id}: TFilmCard) => {
    return (
        <Link href={`/movies/${id}`}>
        <div className={`backgroundTemplate d-flex align-start justify-content-between ${s.card}`}>
            <div className="d-flex align-start">   
                <img src={posterUrl} alt={title} className={s.img}/>
                <div className={s.title}>
                    <p className="fw-600 fs20">{title}</p>
                    <p className={s.genre}>{genre}</p>
                </div>
            </div>
          
            <ButtonGroup/>
        </div>
        </Link>
    )
}
export default FilmCard;
