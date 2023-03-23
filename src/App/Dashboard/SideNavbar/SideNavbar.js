import './SideNavbar.css'
import SideNavbarHeader from "./SideNavbarHeader/SideNavbarHeader";
import {useCallback, useEffect, useState} from "react";
import fullLogo from '../../../assets/landingpage/logo-no-background.png'
import logoIcon from '../../../assets/icons/logo_icon.png'
import SideNavbarLink from "./SideNavbarLink/SideNavbarLink";
import dashboardIcon from '../../../assets/icons/dashboard.png'
import spacesIcon from '../../../assets/icons/spaces.png'
import devicesIcon from '../../../assets/icons/devices.png'
import userProfile from '../../../assets/icons/profile.png'
import logoutIcon from '../../../assets/icons/logout.png'
import supportIcon from '../../../assets/icons/support.png'


const SideNavbar = props => {

    const [isShrink, setIsShrink] = useState(true);

    const changeOnShrink = useCallback(() => {
        changeHeaderImage(isShrink);
    }, [isShrink])

    function changeHeaderImage(isShrink) {
        const sideNavbarHeaderImg = document.querySelector(".sideNavbarHeaderImg");
        const mainSection = document.querySelector(".dashboardMainSection")
        if (isShrink) {
            sideNavbarHeaderImg.style.width = '3em';
            mainSection.style.margin = '1em 1em 1em 14em';
        } else {
            sideNavbarHeaderImg.style.width = '8em';
            mainSection.style.margin = '1em 1em 1em 24em';
        }
    }

    useEffect(() => {
        changeOnShrink();
    }, [changeOnShrink]);

    return (
        <nav className="sideNavbar"
        onMouseEnter={() => setIsShrink(false)}
        onMouseLeave={() => setIsShrink(true)}>
            <SideNavbarHeader logo={isShrink ? logoIcon : fullLogo}/>
            <hr className="hrLineNavbar"/>
            {isShrink ? <SideNavbarLink image={dashboardIcon}/> : <SideNavbarLink image={dashboardIcon} text="Dashboard"/>}
            {isShrink ? <SideNavbarLink image={spacesIcon}/> : <SideNavbarLink image={spacesIcon} text="Spaces"/>}
            {isShrink ? <SideNavbarLink image={devicesIcon}/> : <SideNavbarLink image={devicesIcon} text="Devices"/>}
            {isShrink ? <SideNavbarLink image={userProfile}/> : <SideNavbarLink image={userProfile} text="My Profile"/>}
            {isShrink ? <SideNavbarLink image={logoutIcon}/> : <SideNavbarLink image={logoutIcon} text="Logout"/>}
            {isShrink ? <SideNavbarLink image={supportIcon}/> : <SideNavbarLink image={supportIcon} text="Support"/>}
        </nav>
    )
}


export default SideNavbar;
