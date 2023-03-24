import './InformativeSection.css'
import {useLocation} from "react-router-dom";
import ProfileSection from "./ProfileSection/ProfileSection";
import DevicesSection from "./DevicesSection/DevicesSection";
import SpacesSection from "./SpacesSection/SpacesSection";

const InformativeSection = props => {
    const location = useLocation();
    const croppedLocation = location.pathname.substring('/dashboard'.length + 1);

    function generateSection() {
        switch (croppedLocation) {
            case 'profile':
                return <ProfileSection/>
            case 'devices':
                return <DevicesSection/>
            case 'spaces':
                return <SpacesSection/>
            default:
                return <ProfileSection/>
        }
    }


    return (
        <div className="informativeSection">
            {generateSection()}
        </div>
    )
}


export default InformativeSection;
