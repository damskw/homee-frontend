import React, {useState, useEffect, useCallback} from 'react';
import './NavBar.css';
import LeftSection from "./LeftSection/LeftSection";
import RightSection from "./RightSection/RightSection";

const SCROLL_POSITION = 50;

const NavBar = (props) => {
    const [isTop, setIsTop] = useState(true);

    const changeOnScroll = useCallback(() => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > SCROLL_POSITION && isTop) {
            setIsTop(false);
        } else if (scrollPosition === 0 && !isTop) {
            setIsTop(true);
        }
    }, [isTop]);

    useEffect(() => {
        window.addEventListener("scroll", changeOnScroll);

        return () => {
            window.removeEventListener("scroll", changeOnScroll);
        };
    }, [changeOnScroll]);

    const navBarClasses = `NavBar ${isTop ? "" : "NoTop"}`;

    return (
        <div className={navBarClasses}>
           <LeftSection/>
           <RightSection/>
        </div>
    );
};

export default NavBar;