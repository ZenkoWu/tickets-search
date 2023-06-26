import s from './TextFieldWrapper.module.css'

type TTextFieldWrapper = {
    children : React.ReactNode,
    title: string,
    opened?: boolean
}

export const TextFieldWrapper = ({children, title, opened}: TTextFieldWrapper) => {
    return (
        <div className='pb-16'>
            <p style={{padding: '4px 0'}}>{title}</p>
            <div className={`d-flex align-center pointer rounded-8 ${s.padding} ` + 
                (opened ? s.border_red : s.border_default) 
            }
            >
                {children}
            </div>
        </div>
    )
}