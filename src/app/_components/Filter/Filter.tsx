import { createPortal } from 'react-dom';
import ArrowImage from '../ArrowImage/ArrowImage';
import s from './Filter.module.css'
import { useEffect, useState } from 'react';
import { genresRu } from '../MoviesList/MoviesList';
import { useGetCinemasQuery } from '@/app/redux/services/cinemaApi';

type TFilter ={
    name: string,
    genre: string, 
    setGenre:()=> void,
    setName:()=> void,
    genresOpened: boolean,
    cinemasOpened: boolean,
    setCinemasOpened: () => void,
    setGenresOpened: () => void

    
}
const input = {
    title: 'Название', 
    placeholder: 'Введите название', 
    isSelect: false,
}

const Filter = ({name, setName, 
    genresOpened, cinemasOpened, setCinemasOpened, 
    setGenresOpened,
genre, setGenre}: TFilter) => {
   
    const selects = [
        {
            title: 'Жанр', 
            placeholder: 'Выберите жанр', 
            isSelect: true, 
            options: ['Не выбран', ...Object.values(genresRu)],
            value: genre,
            setValue: setGenre,
        },
        {
            title: 'Кинотеатр', 
            placeholder: 'Выберите кинотеатр', 
            isSelect: true, 
            options: [],
            value: null,
            setValue:  () => null,
        },
    ]

    return (
            <div className={`${s.filter} backgroundTemplate`}>
                <p className='fs20' style={{fontWeight:'600', paddingBottom: '16px'}}>Фильтр поиска</p>
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

// сделать три компонетна с одинаковой подложкой 
export default Filter;

type TTextField = {
    value: string, 
    setValue: (value: string) => void,
    title: string,
    placeholder: string,
    isSelect?: boolean,
    options?: string[],
    opened?: boolean,
    setOpened?:(p: any) => any
}
const TextField = ({
    value,
    setValue,
    title, 
    placeholder, 
    isSelect, 
    options,
    opened,
    setOpened
}: TTextField) => {
    
    return (
        <div style={{paddingTop: '16px', }}>
                <p style={{padding: '4px 0'}}>{title}</p>
                <div className='d-flex align-center rounded-8' 
                style={{ border:'1px solid  #E1E3E6',  padding:'0px 16px',}}>
                 {options && setOpened ? 
                    <>
                    <div 
                    style={{color: '#999FA6', padding:'10px 0px' ,
                    width: '100%', alignItems:'center', fontSize:'14px'}}
                    onClick={()=> setOpened?.((prev: any) => !prev)}
                    >{value ?? placeholder}</div>

                    <ArrowImage opened={opened!} color='grey' width={18}/>
                    {opened &&
                    <div>
                        modal
                    </div>
                    }
                    </> 
                    
                    :
                    <input 
                        type="text" 
                        value={value}
                        style={{height:'40px', color: '#999FA6',  
                        borderRadius:'8px', border:'none', width: '100%', fontFamily: '__Roboto_40d704'}}
                        onChange={(e)=> setValue(e.target.value)}
                        placeholder={placeholder}
                    />
                }
                   
                </div>
        </div>
    )
}
// todo вынести в константы массивы константные 


const SelectField =({value, setValue, placeholder, title, options}: TTextField) => {
    const [domReady, setDomReady] = useState(false)
    const [opened, setOpened] = useState(false)

   useEffect(() => {
    setDomReady(true)
  }, [document.getElementById(title)!])

    return (
        <div id={title} style={{position:'relative', }} className='pointer'>
        <TextFieldWrapper title={title}>
                    <div className='d-flex justify-content-between' 
                    style={{color: 'rgba(27, 31, 35, 0.7)', padding:'0' , 
                    width: '100%', alignItems:'center', fontSize:'14px'}}
                    onClick={()=> setOpened?.((prev: any) => !prev)}
                    >{value ?? placeholder}
                    <ArrowImage opened={opened!} color='grey' width={18}/>
                    </div>

                    
                    
        </TextFieldWrapper>
        {opened && domReady && createPortal(<Selects value={value} setValue={setValue}
        options={options!}/>, document.getElementById(title)!)
        }
        </div>
    )
}

const InputField =({value, setValue, placeholder, title}: TTextField) => {
    return (
        <TextFieldWrapper title={title}>
            <input 
                type="text" 
                value={value}
                style={{ color: '#999FA6',  padding:' 8px 0',
                borderRadius:'8px', border:'none', width: '100%', fontFamily: '__Roboto_40d704'}}
                onChange={(e)=> setValue(e.target.value)}
                placeholder={placeholder}
            />
        </TextFieldWrapper>
    )
}


const TextFieldWrapper =({children, title}: {children : React.ReactNode, title: string}) => {
    return (
        <div style={{paddingBottom: '16px'}}>
            <p style={{padding: '4px 0'}}>{title}</p>
            <div className='d-flex align-center rounded-8' 
            style={{ border:'1px solid  #E1E3E6',  padding:'10px 16px',}}>
                {children}
            </div>
         </div>
    )
}



    // options ? 
    // <>
    // <div 
    //     // type="select" 
    //     // value={value}
    //     contentEditable={isSelect}
    //     data-placeholder={value}

    //     // onFocus={()=> alert('e')}
    //     style={{color: '#999FA6', padding:'10px 0px' ,
    //      width: '100%', alignItems:'center', fontSize:'14px'}}
    //     // onChange={(e)=> {
    //     //     console.log(e)
    //     //     setValue('')}}
    //     onInput={(e: any)=> {
    //             console.log(e)
    //             setValue('')}}
    // >{}</div>
    
    // {options && <ArrowImage opened={false} color='grey' width={18}/>}
    // //  </>
    // : 
    // <div 
    //     // type="select" 
    //     // value={value}
    //     contentEditable
    //     data-placeholder={placeholder}

    //     // onFocus={()=> alert('e')}
    //     style={{color: '#999FA6', padding:'10px 0px' ,
    //      width: '100%', alignItems:'center', fontSize:'14px'}}
    //     // onChange={(e)=> {
    //     //     console.log(e)
    //     //     setValue('')}}
    //     onInput={(e: any)=> {
    //             console.log(e)
    //             setValue('')}}
    // >{value}</div>
    // <input 
    //     type="text" 
    //     // onFocus={()=> alert('i')}
    //     value={value}
    //     style={{height:'40px', color: '#999FA6',  
    //     borderRadius:'8px', border:'none', width: '100%', fontFamily: '__Roboto_40d704'}}
    //     onChange={(e)=> setValue(e.target.value)}
    //     placeholder={placeholder}
    // />

const Selects = ({options, value, setValue}: {options: string[], value?: string, zIndex?: number, setValue: (p: string) => any}) => {
    return (
        <div className='backgroundTemplate' style={{position: 'absolute', padding: '12px 24px', color: 'rgba(27, 31, 35, 1)', 
        zIndex: '600', top:'84px', width :'100%', boxShadow: '0px 2px 5px rgba(27, 31, 35, 0.12)',
        }}>
            {
                options.map(el => 
                    <div className='option' onClick={() => setValue(el)} style={{padding: '12px 0', fontWeight: '100', }}>{el}</div>
                )
            }
        </div>
    )
}