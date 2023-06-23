import Link from 'next/link'
import s from './Header.module.css'
import Image from 'next/image'
export const Header = () => {
    return (
        <header className={`${s.header} d-flex justify-content-between align-center`}>
            <Link href='/'>Билетопоиск</Link>
            <Link href='/cart'>
                <Image
                    src="/basket.svg"
                    alt="basket"
                    width={32}
                    height={32}
                    priority
                />
            </Link>
        </header>
    )
}