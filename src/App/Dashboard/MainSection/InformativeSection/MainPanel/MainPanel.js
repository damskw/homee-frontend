import './MainPanel.css'
import MainPanelFirstSection from "./MainPanelFirstSection/MainPanelFirstSection";
import MainPanelSecondSection from "./MainPanelSecondSection/MainPanelSecondSection";


const MainPanel = props => {

    return (
        <div className="mainPanel">
            <MainPanelFirstSection/>
            <MainPanelSecondSection/>
        </div>
    )
}


export default MainPanel;
