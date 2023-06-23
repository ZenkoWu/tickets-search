"use client";
import s from './OneQuestion.module.css'
import { useState } from 'react'
import ArrowImage from '@/app/_components/ArrowImage/ArrowImage';
export type TOneQuestion = {
    question: string,
    answer: string
}

export const OneQuestion = ({question, answer}: TOneQuestion) => { 
    const [opened, setOpened] = useState<boolean>(false)
    return ( 
        <div 
            className={`${s.container} backgroundTemplate`}
            onClick={() => setOpened(prev => !prev)}
        >
            <div className={s.flex}>
                <div className={s.questionDiv}>
                    <h2>{question}</h2>
                    { 
                        opened && 
                        <p className={s.p}>{answer}</p> 
                    }
                </div>
               
                <ArrowImage opened={opened}/>
            </div>
        </div>
    )
}