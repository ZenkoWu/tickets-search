import { useGetReviewQuery } from "@/app/redux/services/reviewsApi"
import Review, { TReviewData } from "./Review/Review"
import Preloader from "../Preloader/Preloader"

export const Reviews = ({movieId}: {movieId: string}) => {
    const {data, isLoading, error} = useGetReviewQuery(movieId)
    
    if(isLoading) {
        return <Preloader/>
    } 
    
    if(!data || error) {
        return <div>Отзывов пока нет</div>
    }
    return (
        <div className='d-flex flex-column gap-24'>
            {
                data && data.map((el: TReviewData) => 
                    <Review
                        key={el.id}
                        {...el} 
                    />
                )
            }
        </div>
    )
} 

