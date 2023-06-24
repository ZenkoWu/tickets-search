'use client'

import { useSelector } from "react-redux"

export const TicketsCount = () => {
    let ticketsCount = useSelector((state:any) => state.cart.ticketsCount)
    return (
        <div className='backgroundTemplate d-flex justify-content-between fw-600 fs20'>
            <p>Итого билетов:</p>
            <div>{ticketsCount}</div>
        </div>
    )
}