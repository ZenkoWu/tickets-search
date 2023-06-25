import ArrowImage from '../ArrowImage/ArrowImage';
import s from './Filter.module.css'

type TFilter ={
    name: string,
    setName:()=> void,
    genresOpened: boolean,
    cinemasOpened: boolean,
    setCinemasOpened: () => void,
    setGenresOpened: () => void

    
}
const Filter = ({name, setName, genresOpened, cinemasOpened, setCinemasOpened, setGenresOpened}: TFilter) => {
    const inputs = [
        {
            title: 'Название', 
            placeholder: 'Введите название', 
            isSelect: false,
            value: name,
            setValue: setName 
            
        },
        {
            title: 'Жанр', 
            placeholder: 'Выберите жанр', 
            isSelect: true, 
            options: [],
            value: 'Выберите жанр',
            setValue: () => null,
            opened: genresOpened,
            setOpened: setGenresOpened
        },
        {
            title: 'Кинотеатр', 
            placeholder: 'Выберите кинотеатр', 
            isSelect: true, 
            options: [],
            value: 'Выберите кинотеатр',
            setValue:  () => null,
            opened: cinemasOpened,
            setOpened: setCinemasOpened
        },
    ]

    return (
            <div className={`${s.filter} backgroundTemplate`}>
                <p className='fs20' style={{fontWeight:'600', paddingBottom: '4px'}}>Фильтр поиска</p>
                <div>
                    {
                        inputs.map(el => 
                            <TextField
                                value={el.value}
                                setValue={el.setValue}
                                key={el.title}
                                title={el.title}
                                placeholder={el.placeholder}
                                isSelect={el.isSelect}
                                options={el.options}
                                opened={el.opened}
                                setOpened={el.setOpened}
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
    isSelect: boolean,
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

