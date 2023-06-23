import Button from "./Button/Button";

const ButtonGroup = () => {
    return (
        <div className='d-flex justify-content-between align-start'>
            <Button 
                src='minus.svg'
                isDisabled={true}
            />
            <p style={{padding: '0 5px', color: 'black'}}>0</p>
            <Button 
                src='plus.svg'
                isDisabled={false}
            />
        </div>
    )
}

export default ButtonGroup;