import './MainSection.css'
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import InsideFirstSection from "./InsideFirstSection/InsideFirstSection";

const MainSection = props => {

    return (
        <div className="dashboardMainSection">
            <DashboardHeader/>
            <InsideFirstSection/>
        </div>
    )
}


export default MainSection;
