'use client'
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button/Button";
import { cartActions } from "../../redux/features/cart";
import { useCallback, useState } from "react";
import {selectTicketCount} from '../../redux/features/cart/selector'
import Image from "next/image";
import { createPortal } from "react-dom";
import DeleteTicket from "../Modal/DeleteTicket/DeleteTicket";
import { TMovieId, TState } from "../../redux/store";

const ButtonGroup = ({movieId, isRemovable}: {movieId: TMovieId, isRemovable: boolean}) => {
    const [opened, setOpened] = useState(false)

    const ticketCount = useSelector((state: TState) => selectTicketCount(state, movieId))
    const dispatch = useDispatch()

    const addTicket = useCallback((movieId: string) => {
        console.log('add')
        dispatch(cartActions.increment(movieId))
    }, [movieId])

    const removeTicket = useCallback((movieId: string) => {
        if(!isRemovable || isRemovable && ticketCount > 1) {
            dispatch(cartActions.decrement(movieId))
        }else {
            setOpened(true)
        }
    }, [movieId, ticketCount])

    return (
        <div className='d-flex justify-content-between align-start'>
            <Button
                src='/icons/minus.svg'
                isDisabled={!ticketCount}
                onClick={() => removeTicket(movieId)}
            />
            <p className='fw-600 text-dark px-8'>{ticketCount ?? 0}</p>
            <Button 
                src='/icons/plus.svg'
                isDisabled={ticketCount === 30}
                onClick={()=>  addTicket(movieId)}
            />

            {
                isRemovable && 
                <div className='ps-24'>
                    <Image
                        className='pointer'
                        src={'/icons/close.svg'}
                        alt="close"
                        width={20}
                        height={20}
                        priority
                        onClick={() => setOpened(prev => !prev)}
                    />
            </div>
            }

            {
                isRemovable && 
                opened && 
                createPortal(
                    <DeleteTicket 
                        opened={opened} 
                        setOpened={setOpened} 
                        movieId={movieId}
                    />, 
                    document.body
                )
            } 
        </div>
    )
}

export default ButtonGroup;
