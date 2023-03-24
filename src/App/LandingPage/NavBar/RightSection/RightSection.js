import NavLinks from "./NavLinks/NavLinks";
import MainColorButton from "../../Buttons/MainColorButton/MainColorButton";
import './RightSection.css'
import LogInSignUpModal from "../../LogInSignUpModal/LogInSignUpModal";
import React, {useEffect, useState} from 'react'
import {authenticate} from "../../../Authenticate/authenticate";
import {useNavigate} from "react-router-dom";


const RightSection = props => {

    const [isModal, setIsModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const user = authenticate.getUser();
        user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    }, []);

    const redirectToDashboard = () => {
        navigate('/dashboard');
    }

    function displayButtons() {
        if (!isLoggedIn) {
            return (
                <MainColorButton onClick={() => setIsModal(true)} text="Sign Up"></MainColorButton>
            )
        }
        return (
            <MainColorButton onClick={redirectToDashboard} text="Dashboard"></MainColorButton>
        )
    }


    return (
        <div className="rightSection">
            <NavLinks onAction={() => setIsModal(true)}/>
            {displayButtons()}
            {isModal ? <LogInSignUpModal onClose={() => setIsModal(false)}/> : null}
        </div>
    )
}


export default RightSection;
