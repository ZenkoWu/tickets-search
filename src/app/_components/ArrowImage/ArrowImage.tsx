import Image from "next/image"

const ArrowImage = ({opened}: {opened: boolean}) => {
    return (
        <Image
            className='pointer'
            src={opened ? '/arrowUp.svg' : '/arrowDown.svg'}
            alt="arrow"
            width={32}
            height={32}
            priority
        />
    )
}

export default ArrowImage;