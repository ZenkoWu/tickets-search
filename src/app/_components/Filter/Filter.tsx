import s from './Filter.module.css'

const inputs = [
    {
        title: 'Название', 
        placeholder: 'Введите название', 
        isSelect: false, 
    },
    {
        title: 'Жанр', 
        placeholder: 'Выберите жанр', 
        isSelect: true, 
        options: []
    },
    {
        title: 'Кинотеатр', 
        placeholder: 'Выберите кинотеатр', 
        isSelect: true, 
        options: []
    },
]
const Filter = () => {
    return (
            <div className={`${s.filter} backgroundTemplate`}>
                <p className='fs20' style={{fontWeight:'600', paddingBottom: '4px'}}>Фильтр поиска</p>
                <div>
                {
                    inputs.map(el => 
                        <TextField
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
    title: string,
    placeholder: string,
    isSelect: boolean,
    options?: string[]
}
const TextField = ({
    title, 
    placeholder, 
    isSelect, 
    options
}: TTextField) => {
    return (
        <div style={{paddingTop: '16px', }}>
             {/* <form action="" className=''> */}
                {/* <div className='pt-4'> */}
                {/* <label htmlFor="">Жанр</label> */}
                <p style={{padding: '4px 0'}}>{title}</p>
                <div 
                    // type="text" 
                    // name={title} 
                    // value=''
                    // value={data.loginOrUserName}
                    style={{height:'40px', color: '#999FA6',  
                    borderRadius:'8px', border:'1px solid  #E1E3E6', width: '100%', padding:'10px 16px'}}
                    // className='w-100 text-seconary fs-6 ps-3'
                    // onChange={(e)=> set('loginOrUserName', e.target.value)}
                    // id={title}
                    // placeholder={placeholder}
                    // autoComplete="off"
                >
                    {placeholder}
                </div>
            {/* </div> */}
            {/* </form> */}
        </div>
    )
}