import TopSection from "./TopSection/TopSection";
import './LandingPage.css'
import NavBar from "./NavBar/NavBar";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import Footer from "./Footer/Footer";

const LandingPage = props => {

    return (
        <div className="landingPage">
            <NavBar/>
            <TopSection/>
            <SecondSection/>
            <ThirdSection/>
            <Footer/>
        </div>
    )
}


export default LandingPage;
