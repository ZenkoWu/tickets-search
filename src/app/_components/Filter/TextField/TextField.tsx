import { TextFieldWrapper } from "../TextFieldWrapper/TextFieldWrapper"
import s from './TextField.module.css'

type TTextField = {
    value: string, 
    setValue: (value: string) => void,
    title: string,
    placeholder: string
}

export const InputField = ({value, setValue, placeholder, title}: TTextField) => {
    return (
        <TextFieldWrapper title={title}>
            <input 
                type="text" 
                value={value}
                className={`w-100 border-none py-8 fs-14 text_field ${s.input}`}
                onChange={(e)=> setValue(e.target.value)}
                placeholder={placeholder}
            />
        </TextFieldWrapper>
    )
}
