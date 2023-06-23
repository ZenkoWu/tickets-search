'use client'
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button/Button";
import { cartActions } from "@/app/redux/features/cart";
import { useCallback } from "react";

import {selectProductAmount} from '../../redux/features/cart/selector'

const ButtonGroup = ({movieId}: {movieId: string}) => {
    let ticketCount = useSelector((state: any) => state.cart.tickets[movieId])
    const dispatch = useDispatch()

    const addTicket = useCallback((movieId: string) => {
        console.log('add')
        dispatch(cartActions.increment(movieId))
    }, [movieId])

    const removeTicket = useCallback((movieId: string) => {
        console.log('remove')
        dispatch(cartActions.decrement(movieId))
    }, [movieId])
   
    return (
        <div className='d-flex justify-content-between align-start'>
            <Button
                src='minus.svg'
                isDisabled={!ticketCount}
                onClick={() => removeTicket(movieId)}
            />
            <p className='fw-600' style={{padding: '0 8px', color: 'black'}}>{ticketCount ?? 0}</p>
            <Button 
                src='plus.svg'
                isDisabled={ticketCount === 30}
                onClick={()=> addTicket(movieId)}
            />
        </div>
    )
}

export default ButtonGroup;