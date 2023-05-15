import './Footer.css'
import instagramIcon from '../../../assets/icons/instagram.png'
import facebookIcon from '../../../assets/icons/facebook.png'

const Footer = props => {

    const onClickScrollToTop = () => {
        const topSection = document.querySelector(".topSection");
        if (topSection) {
            topSection.scrollIntoView({behavior: "smooth"});
        }
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

    return (
        <div className="footer">
            <hr className="footerLine"/>
            <div className="innerFooter">
                <div className="footerSingleSection">
                    <h2 className="footerSectionHeader">About Homee</h2>
                    <p className="footerSectionParagraph">Homee is a web application which offers home assets management. It was created as a final project of a year Codecool's programming course.</p>
                </div>
                <div className="footerSingleSection">
                    <h2 className="footerSectionHeader">External Links</h2>
                    <ul className="footerUl">
                        <li><a href="https://www.linkedin.com/in/damian-skwierawski-6340b7251/">LinkedIn</a></li>
                        <li><a href="https://github.com/damskw">GitHub</a></li>
                    </ul>
                </div>
                <div className="footerSingleSection">
                    <h2 className="footerSectionHeader">Site Links</h2>
                    <ul className="footerUl">
                        <li className="clickable" onClick={onClickScrollToTop}>Top Section</li>
                        <li className="clickable" onClick={onClickScrollToFeatures}>Features</li>
                        <li className="clickable" onClick={onClickScrollToHowItLooks}>How it looks</li>
                    </ul>
                </div>
            </div>
            <hr className="footerLine"/>
            <div className="footerBottom">
                <div>
                    <p>Copyright 2023 Homee web application made by Damian Skwierawski</p>
                </div>
                <div className="footerIconSection">
                    <img src={instagramIcon} alt="icon"></img>
                    <img src={facebookIcon} alt="icon"></img>
                    <img src={instagramIcon} alt="icon"></img>
                    <img src={facebookIcon} alt="icon"></img>
                </div>
            </div>
        </div>

    )
}


export default Footer;
