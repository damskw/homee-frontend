import './SmallDownloadButton.css'

const SmallDownloadButton = props => {

    const buttonClasses = `smallDownloadButton ${props.class}`;


    return (
        <button onClick={props.action} className={buttonClasses}>{props.text}</button>
    )
}


export default SmallDownloadButton;
