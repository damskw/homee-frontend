import './ModalButton.css'
import {useEffect, useState} from "react";

const ModalButton = props => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {

    })

    function onButtonClick() {
        props.onClick();
        isClicked ? setIsClicked(false) : setIsClicked(true);
    }

    const buttonClasses = `modalButton ${isClicked ? "clicked" : ""}`;

    return (
        <button className={buttonClasses} onClick={onButtonClick}>{props.text}</button>
    )
}


export default ModalButton;
