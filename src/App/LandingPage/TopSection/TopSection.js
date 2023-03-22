import './TopSection.css'
import TopBackground from "./TopBackground/TopBackground";
import ContentArea from "./ContentArea/ContentArea";

const TopSection = props => {

    return (
        <div className="topSection">
            <TopBackground/>
            <ContentArea/>
        </div>

    )
}


export default TopSection;
