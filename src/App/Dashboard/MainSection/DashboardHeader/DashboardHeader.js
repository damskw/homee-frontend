import './DashboardHeader.css'
import HeaderLeftSection from "./HeaderLeftSection/HeaderLeftSection";
import HeaderRightSection from "./HeaderRightSection/HeaderRightSection";
import profileImage from '../../../../assets/icons/header_profile_icon.png'
import {useCallback, useEffect, useState} from "react";

const SCROLL_POSITION = 50;

const DashboardHeader = props => {

    const [isHeaderTop, setIsHeaderTop] = useState(true);

    const changeOnScroll = useCallback(() => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > SCROLL_POSITION && isHeaderTop) {
            setIsHeaderTop(false);
        } else if (scrollPosition === 0 && !isHeaderTop) {
            setIsHeaderTop(true);
        }
    }, [isHeaderTop]);

    useEffect(() => {
        window.addEventListener("scroll", changeOnScroll);

        return () => {
            window.removeEventListener("scroll", changeOnScroll);
        };
    }, [changeOnScroll]);

    const headerClasses = `dashboardHeader ${isHeaderTop ? "" : "onScrollHeader"}`;


    return (
        <div className={headerClasses}>
            <HeaderLeftSection/>
            <HeaderRightSection profileImage={profileImage}/>
        </div>
    )
}


export default DashboardHeader;
