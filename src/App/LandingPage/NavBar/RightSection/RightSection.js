import NavLinks from "./NavLinks/NavLinks";
import MainColorButton from "../../Buttons/MainColorButton/MainColorButton";
import './RightSection.css'
import LogInSignUpModal from "../../LogInSignUpModal/LogInSignUpModal";
import React, {useEffect, useState} from 'react'


const RightSection = props => {

    const [isModal, setIsModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        let loggedIn = sessionStorage.getItem("loggedIn");
        loggedIn === "true" ? setIsLoggedIn(true) : setIsLoggedIn(false);
    }, []);

    function displayButtons() {
        if (!isLoggedIn) {
            return (
                <MainColorButton onClick={() => setIsModal(true)} text="Sign Up"></MainColorButton>
            )
        }
        return (
            <MainColorButton onClick={() => alert("Dashboard")} text="Dashboard"></MainColorButton>
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
