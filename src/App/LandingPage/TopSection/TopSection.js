import topBackground from "../../../assets/landingpage/top_background.png";
import NavBar from "../NavBar/NavBar";
import './TopSection.css'

const TopSection = props => {

    return (
        <div className="topSection">
            <NavBar/>
            <div className="topBackground">
                <img src={topBackground} alt="empty"/>
            </div>
        </div>
    )
}


export default TopSection;
