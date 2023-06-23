'use client'
import Link from 'next/link'
import s from './Header.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'
export const Header = () => {
    const ticketsCount = useSelector((state: any) => state.cart.ticketsCount)
    return (
        <header className={`${s.header} d-flex justify-content-between align-center`}>
            <Link href='/'>Билетопоиск</Link>
            <div className='d-flex align-center gap-8'>
                {
                    ticketsCount > 0 &&
                    <div className='orange-button d-flex align-center justify-content-center' 
                        style={{fontSize:'14px', height: '28px', width: '28px'}}>
                        {ticketsCount}
                    </div>
                }
                <Link href='/cart' className='d-flex align-center'>
                    <Image
                        src="/basket.svg"
                        alt="basket"
                        width={32}
                        height={32}
                        priority
                    />
                </Link>
            </div>
        </header>
    )
}