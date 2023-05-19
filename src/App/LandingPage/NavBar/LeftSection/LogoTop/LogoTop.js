import logo from '../../../../../assets/landingpage/logo-no-background.png'
import './LogoTop.css'
import React from "react";

const LogoTop = props => {

    const onClickScrollToTop = () => {
        const topSection = document.querySelector(".topSection");
        if (topSection) {
            topSection.scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <img onClick={() => onClickScrollToTop()} className="logoTop" src={logo} alt="logo"></img>
    )
}


export default LogoTop;
