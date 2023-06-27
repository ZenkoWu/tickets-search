import { useEffect, useState } from "react"
import { TextFieldWrapper } from "../TextFieldWrapper/TextFieldWrapper"
import ArrowImage from "../../ArrowImage/ArrowImage"
import { createPortal } from "react-dom"
import { Selects } from "../SelectModal/SelectModal"


type TSelectField = {
    value: {
        id: string,
        name: string
    }, 
    setValue: (value: {id: string, name: string}) => void,
    title: string,
    placeholder: string,
    options: {
        id: string,
        name: string
    }[],
    zIndex?: number
}

export const SelectField = ({
    value, 
    setValue, 
    placeholder, 
    title, 
    options, 
    zIndex
}: TSelectField) => {
    const [domReady, setDomReady] = useState(false)
    const [opened, setOpened] = useState(false)

    useEffect(() => {
        setDomReady(true)
    }, [domReady])

    return (
        <div id={title} className='p-relative'>
            <TextFieldWrapper title={title} opened={opened}>
                <div 
                    className='d-flex justify-content-between w-100 align-center fs-14 text_field' 
                    onClick={()=> setOpened?.((prev) => !prev)}
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
                        setValue={setValue}
                        options={options}
                        zIndex={zIndex}
                    />, 
                    document.getElementById(title)!
                )
            }
        </div>
    )
}





