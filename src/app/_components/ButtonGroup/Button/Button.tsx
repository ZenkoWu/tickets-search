import Image from "next/image";
import s from './Button.module.css'

type TButton = {
    src: string,
    isDisabled: boolean,
    onClick: () => void
}

const Button = ({src, isDisabled, onClick}: TButton) => {
    return (
        <div  
            className={`orange-button ${s.button} ${isDisabled && s.disabled}`}
            onClick={()=> !isDisabled && onClick()}
        >
        <Image
            className={!isDisabled ? 'pointer' : ''}
            src={src}
            alt='button'    
            width={12}
            height={12}
            priority
        />
        </div>
    )
}

export default Button;
