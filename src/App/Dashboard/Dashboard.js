import './Dashboard.css'
import MainSection from "./MainSection/MainSection";
import SideNavbar from "./SideNavbar/SideNavbar";
import {Navigate} from "react-router-dom";

const Dashboard = props => {

        return (
            <div className="dashboard">
                <div>
                    <SideNavbar/>
                </div>
                <MainSection/>
            </div>
        )
}


export default Dashboard;

