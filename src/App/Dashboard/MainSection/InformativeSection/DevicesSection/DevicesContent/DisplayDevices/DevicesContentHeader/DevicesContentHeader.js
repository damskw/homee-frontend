import './DevicesContentHeader.css'
import {useNavigate} from "react-router-dom";
import DashboardContentButton from "../../../../../../Buttons/DashboardContentButton/DashboardContentButton";


const DevicesContentHeader = props => {
    const navigate = useNavigate();


    const navigateToAddDevice = () => {
        navigate('/dashboard/devices/add-device')
    }

    return (
        <div className="spacesContentHeader">
            {props.user && <h1>{props.user.name}'s devices</h1>}
            <DashboardContentButton action={navigateToAddDevice} text="Add device"/>
        </div>
    )
}


export default DevicesContentHeader;
