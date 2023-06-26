import Link from 'next/link'
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={`${s.footer} d-flex justify-content-between align-center`}>
            <Link href='/questions-answers' className={s.about}> 
                Вопросы и ответы
            </Link>

            <Link href="/aboutUs">О нас</Link>
        </footer>
    )
}