import ArrowImage from '../ArrowImage/ArrowImage';
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
             <form action="" className=''>
                {/* <div className='pt-4'> */}
                {/* <label htmlFor="">Жанр</label> */}
                <p style={{padding: '4px 0'}}>{title}</p>
                <div className='d-flex align-center rounded-8' 
                style={{ border:'1px solid  #E1E3E6',  padding:'0px 16px',}}>
                <input 
                    type="text" 
                    // name={title} 
                    // value=
                    // value={data.loginOrUserName}
                    style={{height:'40px', color: '#999FA6',  
                    borderRadius:'8px', border:'none', width: '100%', }}
                    // className='fs20'
                    // onChange={(e)=> set('loginOrUserName', e.target.value)}
                    // id={title}
                    placeholder={placeholder}
                    // autoComplete="off"
                />{
                   options&& <ArrowImage opened={false} color='grey' width={18}/>
                }
                </div>
                    
            </form>
        </div>
    )
}
// todo вынести в константы массивы константные 