import Image from "next/image";
import s from './Button.module.css'

const Button = ({src, isDisabled}: {src: string, isDisabled: boolean}) => {
    return (
        <div className={`${s.button} ${isDisabled && s.disabled}`}>
        <Image
            className={`pointer`}
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
