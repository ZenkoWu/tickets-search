import { useGetReviewQuery } from "@/app/redux/services/reviewsApi"
import Review, { TReviewData } from "./Review/Review"

export const Reviews = ({movieId}: {movieId: string}) => {
    const {data, isLoading, error} = useGetReviewQuery(movieId)
    console.log(data)
    if(isLoading) {
        return <div>Загрузка отзывов...</div>
    }
    if(!data || error) {
        return <div>'Данные не найдены'</div>
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

