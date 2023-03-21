import TopSection from "./TopSection/TopSection";
import './LandingPage.css'
import NavBar from "./NavBar/NavBar";

const LandingPage = props => {

    return (
        <div className="landingPage">
            <NavBar/>
            <TopSection/>
        </div>
    )
}


export default LandingPage;
