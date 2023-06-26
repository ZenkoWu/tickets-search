import Image from "next/image";
import s from './Review.module.css'

export type TReviewData = {
    name: string, 
    rating: number,
    text: string, 
    id: string,
    photoUrl?: string
}
const Review = ({name, rating, text, photoUrl}: TReviewData) => {
    return (
        <div className='backgroundTemplate d-flex gap-24 align-center'>
            <div className={`rounded-8 ${s.avatar}`}>
                {
                    photoUrl ? 
                        <Image
                            src={photoUrl}
                            alt="avatar"
                            width={100}
                            height={100}
                            priority
                        />
                    :
                        <Image
                            src={'/icons/photo.svg'}
                            alt="default"
                            width={32}
                            height={32}
                            priority
                        />
                }
            </div>
            <div className='d-flex flex-column gap-24 w-100'>
                <div className='d-flex justify-content-between'>
                    <h2>{name}</h2>
                    <p>Оценка: {rating}</p>
                </div>
                <p>{text}</p>
            </div>
        </div>
    )
}
export default Review;