import { TextFieldWrapper } from "../TextFieldWrapper/TextFieldWrapper"
import s from './TextField.module.css'
import {debounce} from '../../../_utils.js/debounce'

type TTextField = {
    value: string, 
    setValue: (value: string) => void,
    title: string,
    placeholder: string
}

export const InputField = ({value, setValue, placeholder, title}: TTextField) => {
    const searchMovie = debounce((e: any) => setValue(e.target.value), 300)
    return (
        <TextFieldWrapper title={title}>
            <input 
                type="text" 
                value={value}
                className={`w-100 border-none py-8 fs-14 text_field ${s.input}`}
                onChange={(e: any) => searchMovie(e) }
                placeholder={placeholder}
            />
        </TextFieldWrapper>
    )
}
