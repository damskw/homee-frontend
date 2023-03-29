import './SingleDevice.css'
import DashboardContentButton from "../../../../../../Buttons/DashboardContentButton/DashboardContentButton";
import {useNavigate} from "react-router-dom";


const SingleDevice = props => {

    const navigate = useNavigate();

    const onEditClickAction = () => {
        navigate(`/dashboard/devices/edit-device?deviceId=${props.device.id}`);
    }

    async function onDeleteClickAction() {

        window.location.reload();
    }


    return (
        <div className="singleDevice">
            <div className="devicesNameSingle">
                <div className="editDeleteDevice">
                    <i onClick={onEditClickAction} id="editSpaceIcon" className="fa-solid fa-pen-to-square"></i>
                    <i onClick={onDeleteClickAction} id="deleteSpaceIcon" className="fa-regular fa-circle-xmark"></i>
                </div>
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
