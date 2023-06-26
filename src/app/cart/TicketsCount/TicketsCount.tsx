'use client'

import { selectTicketsAmount } from "@/app/redux/features/cart/selector"
import { TState } from "@/app/redux/store"
import { useSelector } from "react-redux"

export const TicketsCount = () => {
    const ticketsCount = useSelector((state: TState) => selectTicketsAmount(state))
    return (
        <div className='backgroundTemplate d-flex justify-content-between fw-600 fs20'>
            <p>Итого билетов:</p>
            <div>{ticketsCount}</div>
        </div>
    )
}