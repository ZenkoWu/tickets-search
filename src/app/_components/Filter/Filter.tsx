import { createPortal } from 'react-dom';
import ArrowImage from '../ArrowImage/ArrowImage';
import s from './Filter.module.css'
import { useEffect, useState } from 'react';
import { useGetCinemasQuery } from '@/app/redux/services/cinemaApi';
import genresRu from '../../genresRu';
import { TextFieldWrapper } from './TextFieldWrapper/TextFieldWrapper';
import { Selects } from './SelectModal/Selectmodal';

type TFilter = {
    name: string,
    genre: string, 
    cinema: string,
    setGenre:()=> void,
    setName:()=> void,
    setCinema: () => void,

    
}
const input = {
    title: 'Название', 
    placeholder: 'Введите название', 
    isSelect: false,
}

//todo поправить 3индекс и добавить красный бордер

const Filter = ({name, setName, cinema, setCinema,
genre, setGenre}: TFilter) => {
    let {data}: any= useGetCinemasQuery('')
    const selects = [
        {
            title: 'Жанр', 
            placeholder: 'Выберите жанр', 
            isSelect: true, 
            options: ['Не выбран', ...Object.values(genresRu)]?.map((el: any) => ({id: el, name: el})),
            value: genre,
            setValue: setGenre,
        },
        {
            title: 'Кинотеатр', 
            placeholder: 'Выберите кинотеатр', 
            isSelect: true, 
            options: data?.map((el: any) => ({id: el.id, name: el.name})),
            value: cinema,
            setValue:  setCinema
        },
    ]

    return (
        <div className={`${s.filter} backgroundTemplate`}>
            <p className='fs20 fw-600 pb-16'>Фильтр поиска</p>

            <div>
                <InputField
                    value={name}
                    setValue={setName}
                    key={input.title}
                    placeholder={input.placeholder}
                    title={input.title}
                />

                {
                    selects.map((el: any) => 
                        <SelectField
                            value={el.value}
                            setValue={el.setValue}
                            key={el.title}
                            title={el.title}
                            placeholder={el.placeholder}
                            isSelect={el.isSelect}
                            options={el.options}
                        />
                    )
                }
            </div>
    </div>
    )
}

export default Filter;

type TTextField = {
    value: any, 
    setValue: (value: string) => void,
    title: string,
    placeholder: string,
    isSelect?: boolean,
    options?: string[],
    opened?: boolean,
    setOpened?:(p: any) => any
}

type TSelectField = {
    value: {
        id: string,
        name: string
    }, 
    setValue: (value: string) => void,
    title: string,
    placeholder: string,
    isSelect?: boolean,
    options?: string[],
    opened?: boolean,
    setOpened?:(p: any) => any
}

const SelectField = ({value, setValue, placeholder, title, options}: TTextField) => {
    const [domReady, setDomReady] = useState(false)
    const [opened, setOpened] = useState(false)

    // opened && document.addEventListener('click', (e:any) => 
    // // console.log(e.target)
    //     e?.target != document.getElementById(title) && setOpened(prev => !prev)
    // )
    useEffect(() => {
        setDomReady(true)
    }, [document.getElementById(title)!])

    return (
        <div id={title} style={{position:'relative', }} className=''>
            <TextFieldWrapper title={title} opened={opened}>
                <div 
                    className='d-flex justify-content-between w-100 align-center fs-14' 
                    style={{color: 'rgba(27, 31, 35, 0.7)', padding:'0' , 
                    }}
                    onClick={()=> setOpened?.((prev: any) => !prev)}
                >
                    {value?.name ?? placeholder}
                    <ArrowImage 
                        opened={opened} 
                        color='grey' 
                        width={18}
                    />
                </div>  
            </TextFieldWrapper>

            {
                opened && 
                domReady && 
                createPortal(
                    <Selects
                        value={value} 
                        setValue={setValue}
                        options={options!}
                    />, 
                    document.getElementById(title)!
                )
            }
        </div>
    )
}





const InputField = ({value, setValue, placeholder, title}: TTextField) => {
    return (
        <TextFieldWrapper title={title}>
            <input 
                type="text" 
                value={value}
                className='w-100 border-none py-8'
                style={{color: '#999FA6', 
                fontFamily: '__Roboto_40d704'}}

                onChange={(e)=> setValue(e.target.value)}
                placeholder={placeholder}
            />
        </TextFieldWrapper>
    )
}



