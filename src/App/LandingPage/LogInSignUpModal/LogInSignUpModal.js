import './LogInSignUpModal.css'
import {useState} from "react";
import SignUpContent from "./SignUpContent/SignUpContent";
import LogInContent from "./LogInContent/LogInContent";
import ModalButton from "../Buttons/ModalButton/ModalButton";

const LogInSignUpModal = props => {
    const [isSignUp, setIsSignUp] = useState(props.isSignUp);

    return (
        <div className="modal">
            <div className="modal-content">
                <ModalButton onClick={() => setIsSignUp(false)} text="Log In"/>
                <ModalButton onClick={() => setIsSignUp(true)} text="Sign Up"/>
                <span onClick={props.onClose} className="close">&times;</span>
                {isSignUp ? <SignUpContent onSpan={() => setIsSignUp(false)}/> : <LogInContent onSpan={() => setIsSignUp(true)}/>}
            </div>
        </div>
    )
}


export default LogInSignUpModal;
