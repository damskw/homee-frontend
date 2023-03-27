import './SingleDevice.css'
import DashboardContentButton from "../../../../../../Buttons/DashboardContentButton/DashboardContentButton";


const SingleDevice = props => {


    return (
        <div className="singleDevice">
            <div className="devicesNameSingle">
                <span>{props.device.name}</span>
            </div>
            <span>Model: {props.device.model}</span>
            <span>Location: {props.device.spot}</span>
            <span>Device type: {props.device.deviceType}</span>
            <span>Last update: {props.device.updatedAt}</span>
            <DashboardContentButton text="View details"/>
        </div>
    )
}


export default SingleDevice;
