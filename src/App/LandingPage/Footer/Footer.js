import './Footer.css'
import instagramIcon from '../../../assets/icons/instagram.png'
import facebookIcon from '../../../assets/icons/facebook.png'

const Footer = props => {

    return (
        <div className="footer">
            <hr className="footerLine"/>
            <div className="innerFooter">
                <div className="footerSingleSection">
                    <h2 className="footerSectionHeader">Some text</h2>
                    <p className="footerSectionParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. Duis aute irure dolor in repre.</p>
                </div>
                <div className="footerSingleSection">
                    <h2 className="footerSectionHeader">Some text</h2>
                    <ul className="footerUl">
                        <li>Some text</li>
                        <li>Some text</li>
                        <li>Some text</li>
                        <li>Some text</li>
                        <li>Some text</li>
                    </ul>
                </div>
                <div className="footerSingleSection">
                    <h2 className="footerSectionHeader">Some text</h2>
                    <ul className="footerUl">
                        <li>Some text</li>
                        <li>Some text</li>
                        <li>Some text</li>
                        <li>Some text</li>
                        <li>Some text</li>
                    </ul>
                </div>
            </div>
            <hr className="footerLine"/>
            <div className="footerBottom">
                <div>
                    <p>Copyright 2023 Homee website made by Homee Team</p>
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
