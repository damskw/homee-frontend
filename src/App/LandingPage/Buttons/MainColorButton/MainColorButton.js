import './MainColorButton.css'


const MainColorButton = props => {

    return (
        <button onClick={props.onClick} className="MainColorButton">{props.text}</button>
    )
}


export default MainColorButton;
