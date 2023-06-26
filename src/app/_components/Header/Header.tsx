'use client'
import Link from 'next/link'
import s from './Header.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import type { TState } from '../../redux/store'
import { selectTicketsAmount } from '@/app/redux/features/cart/selector'

export const Header = () => {
    const ticketsCount = useSelector((state: TState) => selectTicketsAmount(state))
    
    return (
        <header className={`${s.header} d-flex justify-content-between align-center`}>
            <Link href='/'>Билетопоиск</Link>
            <div className='d-flex align-center gap-8'>
                {
                    ticketsCount > 0 &&
                    <div className={`
                        orange-button d-flex align-center justify-content-center fs-14 ${s.tickets_count}
                    `}>
                        {ticketsCount}
                    </div>
                }
                <Link href='/cart' className='d-flex align-center'>
                    <Image
                        src="/icons/basket.svg"
                        alt="basket"
                        width={32}
                        height={32}
                        loading='lazy'
                    />
                </Link>
            </div>
        </header>
    )
}