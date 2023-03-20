import React, {useState, useEffect, useCallback} from 'react';
import './NavBar.css';
import logo from '../../../assets/landingpage/logo-no-background.png'

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
            <div className="leftSection">
                <img className="logoTop" src={logo} alt="logo"></img>
            </div>
            <div className="rightSection">
                <nav>
                    <ul className="navLinks">
                        <li><a href="localhost://3000">How it works</a></li>
                        <li><a href="localhost://3000">Pricing</a></li>
                        <li><a href="localhost://3000">About</a></li>
                        <li><a href="localhost://3000">FAQ</a></li>
                        |
                        <li><a href="localhost://3000">Log In</a></li>
                    </ul>
                </nav>
                <button>Sign Up</button>
            </div>
        </div>
    );
};

export default NavBar;