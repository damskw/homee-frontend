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
                <SingleNavLink href="localhost://3000" text="How it works"/>
                <SingleNavLink href="localhost://3000" text="Pricing"/>
                <SingleNavLink href="localhost://3000" text="About"/>
                <SingleNavLink href="localhost://3000" text="FAQ"/>
                |
                {displayLogInLogOut(props)}
            </ul>
        </nav>
    )
}


export default NavLinks;
