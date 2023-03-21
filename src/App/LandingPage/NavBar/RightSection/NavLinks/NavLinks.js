import './NavLinks.css'
import React from "react";
import SingleNavLink from "./SingleNavLink/SingleNavLink";

const NavLinks = props => {

    return (
        <nav>
            <ul className="navLinks">
                <SingleNavLink href="localhost://3000" text="How it works"/>
                <SingleNavLink href="localhost://3000" text="Pricing"/>
                <SingleNavLink href="localhost://3000" text="About"/>
                <SingleNavLink href="localhost://3000" text="FAQ"/>
                |
                <SingleNavLink href="localhost://3000" text="Log In"/>
            </ul>
        </nav>
    )
}


export default NavLinks;
