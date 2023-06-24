'use client'
import { cartActions } from "@/app/redux/features/cart";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";

const DeleteTicket = ({movieId}: {movieId: string}) => {
    const [opened, setOpened] = useState<boolean>(false)
    const dispatch = useDispatch()
    
    const onAccept = (movieId:string) => {
        dispatch(cartActions.removeTicket(movieId))
    }
    const onCancel =() => {

    }
    return (
        <div className='backgroundTemplate' style={{display: 'inline-block', }}>
            <div style={{paddingBottom:'16px'}} className='d-flex justify-content-between align-center'>
                <p className='fs20 fw-600' style={{paddingRight:'70px'}}>Удаление билета</p>
                <Image
                    className='pointer'
                    src={'close.svg'}
                    alt="close"
                    width={16}
                    height={16}
                    priority
                />
                </div>
                <p style={{paddingBottom: '24px'}}>Вы уверены, что хотите удалить билет?</p>
                <div style={{display:'flex',}}>
                    <div className='pointer' style={{display: 'inline-block', color: 'white', borderRadius: '8px', background: '#FF5500', padding: '10px 16px', marginRight: '8px'}}>
                        Да
                    </div>
                    <div className='pointer' style={{display: 'inline-block', color: '#FF5500', border:'1px solid #FF5500',  borderRadius: '8px', background: 'white', padding: '10px 16px'}}>
                        Нет
                    </div>
                </div>
               
        </div>
    )
}
export default DeleteTicket;