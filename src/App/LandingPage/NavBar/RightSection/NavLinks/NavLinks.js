import './NavLinks.css'
import React, {useEffect, useState} from "react";
import SingleNavLink from "./SingleNavLink/SingleNavLink";
import {authenticate} from "../../../../Authenticate/authenticate";

const NavLinks = props => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const user = authenticate.getUser();
        user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    }, []);

    function logOut() {
        authenticate.logoutUser();
        window.location.reload();
    }

    const onClickScrollToFeatures = () => {
        const featuresDiv = document.querySelector(".secondSection");
        if (featuresDiv) {
            featuresDiv.scrollIntoView({behavior: "smooth"});
        }
    }

    const onClickScrollToHowItLooks = () => {
        const howItLooks = document.querySelector(".thirdSection");
        if (howItLooks) {
            howItLooks.scrollIntoView({behavior: "smooth"});
        }
    }

    const onClickScrollToAbout = () => {
        const about = document.querySelector(".footer");
        if (about) {
            about.scrollIntoView({behavior: "smooth"});
        }
    }


    function displayLogInLogOut(props) {
        if (!isLoggedIn) {
            return (
                <SingleNavLink action={props.onAction} text="Log In"/>
            )
        } 
        return (
            <SingleNavLink action={logOut} text="Log Out"/>
        )
    }

    return (
        <nav>
            <ul className="navLinks">
                <SingleNavLink action={() => onClickScrollToFeatures()} text="Features"/>
                <SingleNavLink action={() => onClickScrollToHowItLooks()} text="How it looks"/>
                <SingleNavLink action={() => onClickScrollToAbout()} text="About"/>
                <SingleNavLink href="localhost://3000" text="FAQ"/>
                |
                {displayLogInLogOut(props)}
            </ul>
        </nav>
    )
}


export default NavLinks;
