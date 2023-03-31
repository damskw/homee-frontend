import './DevicesContent.css'
import {useLocation} from "react-router-dom";
import DevicesForm from "./DevicesForm/DevicesForm";
import DisplayDevices from "./DisplayDevices/DisplayDevices";
import UpdateDeviceImageForm from "./UpdateDeviceImageForm/UpdateDeviceImageForm";
import DetailedDevice from "./DetailedDevice/DetailedDevice";


const DevicesContent = props => {

    const location = useLocation();
    const croppedLocation = location.pathname.substring('/dashboard/devices'.length);
    const addDeviceLocation = "/add-device";
    const editDeviceLocation = "/edit-device";
    const updateImageLocation = "/update-image";

    function displayContent() {
        switch (croppedLocation) {
            case addDeviceLocation:
                return <DevicesForm/>
            case editDeviceLocation:
                return <DevicesForm device={props.device}/>
            case updateImageLocation:
                return <UpdateDeviceImageForm device={props.device}/>
            default:
                if (croppedLocation.startsWith('/')) {
                    return <DetailedDevice/>;
                } else {
                    return <DisplayDevices/>;
                }
        }
    }


    return (
        <div className="devicesContent">
            {displayContent()}
        </div>
    )
}


export default DevicesContent;
