import Image from "next/image";

const Preloader = () => {
    return(
      <div style={{margin: 'auto', textAlign: 'center'}}>
         <Image
            src={'/spinner.svg'}
            width={200}
            height={200}
            alt='loader'
        />
      </div>
    )
}
  
  export default Preloader;