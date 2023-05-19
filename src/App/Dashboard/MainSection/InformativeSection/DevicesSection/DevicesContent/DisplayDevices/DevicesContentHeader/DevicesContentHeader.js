import './DevicesContentHeader.css'
import {useNavigate} from "react-router-dom";
import DashboardContentButton from "../../../../../../Buttons/DashboardContentButton/DashboardContentButton";
import {authenticate} from "../../../../../../../Authenticate/authenticate";
import {dataHandler} from "../../../../../../../Api/dataHandler";
import {Alert} from "@mui/material";
import {useState} from "react";


const DevicesContentHeader = props => {
    const navigate = useNavigate();
    const [isAlert, setIsAlert] = useState(false);
    const [alertText, setAlertText] = useState('');
    const [alertSeverity, setAlertSeverity] = useState("warning");

    const navigateToAddDevice = async () => {
        const userId = authenticate.getUser().id;
        const userSpaces = await dataHandler.countUserSpaces(userId);
        if (userSpaces < 1) {
            setIsAlert(true);
            setAlertText("Looks like you don't have any space to assign your device to, you must create one. Close this prompt to be returned to adding space form or go in there manually.");
            setAlertSeverity("warning");
            return;
        }
        navigate('/dashboard/devices/add-device');
    }

    const navigateToAddSpace = () => {
        return navigate('/dashboard/spaces/add-space');
    }


    return (
        <div className="spacesContentHeader">
            {props.user && <h1>{props.user.name}'s devices</h1>}
            {isAlert ? (
                <Alert onClose={navigateToAddSpace} severity={alertSeverity} variant="filled">{alertText}</Alert>
            ) : null}
            <DashboardContentButton action={navigateToAddDevice} text="Add device"/>
        </div>
    )
}


export default DevicesContentHeader;
