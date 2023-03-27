import './DevicesContent.css'
import {useLocation} from "react-router-dom";
import DevicesForm from "./DevicesForm/DevicesForm";
import DisplayDevices from "./DisplayDevices/DisplayDevices";


const DevicesContent = props => {

    const location = useLocation();
    const croppedLocation = location.pathname.substring('/dashboard/devices'.length + 1);
    const addSpaceLocation = "add-device";
    const editSpaceLocation = "edit-device";

    function displayContent() {
        switch (croppedLocation) {
            case addSpaceLocation:
                return <DevicesForm/>
            case editSpaceLocation:
                return <DevicesForm device={props.device}/>
            default:
                return <DisplayDevices/>
        }
    }


    return (
        <div className="devicesContent">
            {displayContent()}
        </div>
    )
}


export default DevicesContent;
