import './NavLinks.css'
import React, {useEffect, useState} from "react";
import SingleNavLink from "./SingleNavLink/SingleNavLink";

const NavLinks = props => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        let loggedIn = sessionStorage.getItem("loggedIn");
        loggedIn === "true" ? setIsLoggedIn(true) : setIsLoggedIn(false);
    }, []);

    function logOut() {
        sessionStorage.setItem("loggedIn", "false");
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
                <SingleNavLink action={onClickScrollToFeatures} href="localhost://3000" text="Features"/>
                <SingleNavLink action={onClickScrollToHowItLooks} href="localhost://3000" text="How it looks"/>
                <SingleNavLink action={onClickScrollToAbout} href="localhost://3000" text="About"/>
                <SingleNavLink href="localhost://3000" text="FAQ"/>
                |
                {displayLogInLogOut(props)}
            </ul>
        </nav>
    )
}


export default NavLinks;
