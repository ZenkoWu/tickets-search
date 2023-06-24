import Image from "next/image"

const ArrowImage = ({opened, color, width}: {opened: boolean, color?: 'grey', width?: 16 | 18}) => {
    const blackArrows = ['/icons/arrowUp.svg', '/icons/arrowDown.svg']
    const greyArrows = ['/icons/greyArrowUp.svg', '/icons/greyArrowDown.svg']

    const arrows = color === 'grey' ? greyArrows : blackArrows
    return (
        <Image
            className='pointer'
            src={opened ? arrows[0] : arrows[1]}
            alt="arrow"
            width={width ? width : 32}
            height={32}
            priority
        />
    )
}

export default ArrowImage;