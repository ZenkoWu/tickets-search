import Image from "next/image";

const Preloader = () => {
    return(
        <div className='m-auto text-center'>
            <Image
                src={'/icons/spinner.svg'}
                width={200}
                height={200}
                alt='loader'
                priority
            />
        </div>
    )
}
  
export default Preloader;