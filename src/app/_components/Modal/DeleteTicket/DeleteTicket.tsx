'use client'
import { cartActions } from "@/app/redux/features/cart";
import Image from "next/image";
import { useDispatch } from "react-redux";
import s from './DeleteTicket.module.css';

type TDeleteTicket = {
    movieId: string,
    opened: boolean,
    setOpened:(open: boolean) => void
}

const DeleteTicket = ({movieId, setOpened, opened}: TDeleteTicket) => {
    const dispatch = useDispatch()
    
    const onAccept = (movieId:string) => {
        dispatch(cartActions.removeTicket(movieId))
    }
    const onCancel = () => {
        setOpened(false)
    }

    const onRejection = (e: any) => {
        opened && e?.target?.className == s.wrapper_modal && onCancel()
    }

    return (
        <div 
            className={`${s.wrapper_modal}`} 
            onClick={onRejection}
        >
            <div className={`backgroundTemplate ${s.modal}`}>
                <div className='d-flex justify-content-between align-center pb-16'>
                    <p className='fs20 fw-600'>Удаление билета</p>

                    <Image
                        onClick={onCancel}
                        className='pointer'
                        src={'/icons/close.svg'}
                        alt="close"
                        width={16}
                        height={16}
                        priority
                    />
                </div>

                <p style={{paddingBottom: '24px'}}>Вы уверены, что хотите удалить билет?</p>

                <div className='d-flex'>
                    <div 
                        className={`pointer orange-button rounded-8 ${s.button} text-white`} 
                        onClick={() => onAccept(movieId)}
                    >
                        Да
                    </div>
                    <div 
                        className={`pointer ${s.button} ${s.orange_border}`}
                        onClick={onCancel} 
                    >
                        Нет
                    </div>
                </div>

            </div>
        </div>
    )
}
export default DeleteTicket;