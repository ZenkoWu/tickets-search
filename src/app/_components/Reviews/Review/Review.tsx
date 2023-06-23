import Image from "next/image";

export type TReviewData = {
    name: string, 
    rating: number,
    text: string, 
    id: string,
    photoUrl?: string
}
const Review = ({name, rating, text, id, photoUrl}: TReviewData) => {
    return (
        <div className='backgroundTemplate d-flex gap-24'>
            {
                photoUrl ? 
                <img src={photoUrl}/> 
                :
                    <Image
                        src={'/photo.svg'}
                        alt="default"
                        width={32}
                        height={32}
                        priority
                    />
            }
            <div>
                <div className='d-flex justify-content-between'>
                    <h2>{name}</h2>
                    <p>Оценка: {rating}</p>
                </div>
            </div>
        </div>
    )
}
export default Review;