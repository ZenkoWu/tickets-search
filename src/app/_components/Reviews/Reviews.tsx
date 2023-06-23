import { useGetReviewQuery } from "@/app/redux/services/reviewsApi"
import Review, { TReviewData } from "./Review/Review"

export const Reviews = ({movieId}: {movieId: string}) => {
    const {data, isLoading, error} = useGetReviewQuery(movieId)
    console.log(data)
    return (
        <div>
           {
                data.map((el: TReviewData)=> {
                    <Review
                        key={el.id}
                        {...el}
                    />
                })
           }
        </div>
    )
} 

