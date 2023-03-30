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
                return <ProfileSection/>
            case 'devices':
                return <DevicesSection/>
            case 'devices/add-device':
                return <DevicesSection/>
            case 'devices/edit-device':
                return <DevicesSection/>
            case 'devices/update-image':
                return <DevicesSection/>
            case 'spaces':
                return <SpacesSection/>
            case 'spaces/add-space':
                return <SpacesSection/>
            case 'spaces/edit-space':
                return <SpacesSection/>
            default:
                return <MainPanel/>
        }
    }


    return (
        <div className="informativeSection">
            {generateSection()}
        </div>
    )
}


export default InformativeSection;
