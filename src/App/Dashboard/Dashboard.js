import './Dashboard.css'
import MainSection from "./MainSection/MainSection";
import SideNavbar from "./SideNavbar/SideNavbar";
import {authenticate} from "../Authenticate/authenticate";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Dashboard = props => {
    const navigate = useNavigate();
    const isLoggedIn = authenticate.getUser();


    useEffect(() => {
        if (!isLoggedIn) {
            return navigate('/');
        }
    })
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

