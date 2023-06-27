import s from './SelectModal.module.css'
type TSelects = {
    options: {id: string, name: string}[], 
    zIndex?: number, 
    setValue: (value: {id: string, name: string}) => void
}

export const Selects = ({options, setValue, zIndex}: TSelects) => {
    return (
        <div 
            className={`backgroundTemplate ${s.container}`} 
            style={{ zIndex: `${zIndex}`}}>
            {
                options?.map(el => 
                    <div 
                        key={el.id}
                        className={`${s.py_12}`}
                        onClick={() => setValue({id: el.id, name: el.name})} 
                    >
                        {el.name}
                    </div>
                )
            }
        </div>
    )
}