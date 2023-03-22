import './ErrorModal.css'

const ErrorModal = props => {

    return (
        <p className="error">Error: {props.text}</p>
    )
}


export default ErrorModal;
