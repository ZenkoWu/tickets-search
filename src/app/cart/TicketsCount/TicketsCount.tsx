export const TicketsCount = ({ticketsCount}: {ticketsCount: number}) => { 
    return (
        <div className='backgroundTemplate d-flex justify-content-between fw-600 fs20'>
            <p>Итого билетов:</p>
            <div>{ticketsCount}</div>
        </div>
    )
}