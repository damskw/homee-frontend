import './MainSection.css'
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import InformativeSection from "./InformativeSection/InformativeSection";

const MainSection = props => {

    return (
        <div className="dashboardMainSection">
            <DashboardHeader/>
            <InformativeSection/>
        </div>
    )
}


export default MainSection;
