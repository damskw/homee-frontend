import './InformativeSection.css'
import {useLocation} from "react-router-dom";
import ProfileSection from "./ProfileSection/ProfileSection";
import DevicesSection from "./DevicesSection/DevicesSection";
import SpacesSection from "./SpacesSection/SpacesSection";
import MainPanel from "./MainPanel/MainPanel";
import TasksSection from "./TasksSection/TasksSection";

const InformativeSection = props => {
    const location = useLocation();
    const croppedLocation = location.pathname.substring('/dashboard'.length + 1);

    function generateSection() {
        switch (croppedLocation) {
            case 'profile':
                return <ProfileSection/>;
            case 'devices':
            case 'devices/add-device':
            case 'devices/edit-device':
                return <DevicesSection/>;
            case 'tasks':
                return <TasksSection/>;
            case 'spaces':
            case 'spaces/add-space':
            case 'spaces/edit-space':
                return <SpacesSection/>;
            default:
                if (croppedLocation.startsWith('devices/')) {
                    return <DevicesSection/>;
                } else if (croppedLocation.startsWith('spaces/')) {
                    return <SpacesSection />;
                } else {
                    return <MainPanel/>;
                }
        }
    }


    return (
        <div className="informativeSection">
            <div className="alertSection">

            </div>
            {generateSection()}
        </div>
    )
}


export default InformativeSection;
