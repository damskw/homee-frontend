import './InformativeSection.css'
import {useLocation} from "react-router-dom";
import ProfileSection from "./ProfileSection/ProfileSection";
import DevicesSection from "./DevicesSection/DevicesSection";
import SpacesSection from "./SpacesSection/SpacesSection";
import MainPanel from "./MainPanel/MainPanel";

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
            case 'devices/update-image':
                return <DevicesSection/>;
            case 'spaces':
            case 'spaces/add-space':
            case 'spaces/edit-space':
                return <SpacesSection/>;
            default:
                if (croppedLocation.startsWith('devices/')) {
                    return <DevicesSection/>;
                } else {
                    return <MainPanel/>;
                }
        }
    }


    return (
        <div className="informativeSection">
            {generateSection()}
        </div>
    )
}


export default InformativeSection;
