type TSelects = {
    options: any[], 
    value?: string, 
    zIndex?: number, 
    setValue: (p: any) => any
}

export const Selects = ({options, value, setValue}: TSelects) => {
    return (
        <div 
            className='backgroundTemplate' 
            style={{position: 'absolute', padding: '12px 24px', color: 'rgba(27, 31, 35, 1)', 
        zIndex: '600', top:'84px', width :'100%', boxShadow: '0px 2px 5px rgba(27, 31, 35, 0.12)',
        }}>
            {
                options?.map(el => 
                    <div className='option' onClick={() => setValue({id: el.id, name: el.name})} style={{padding: '12px 0', fontWeight: '100', }}>{el.name}</div>
                )
            }
        </div>
    )
}