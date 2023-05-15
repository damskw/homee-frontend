import './MainPanelFirstSection.css'
import MuiBox from "./MuiBox/MuiBox";
import {useEffect, useState} from "react";
import {authenticate} from "../../../../../Authenticate/authenticate";
import {dataHandler} from "../../../../../Api/dataHandler";
import {useNavigate} from "react-router-dom";


const MainPanelFirstSection = props => {

    const navigate = useNavigate();
    const [numberOfUserDevices, setNumberOfUserDevices] = useState(0);
    const [numberOfUserSpaces, setNumberOfUserSpaces] = useState(0);
    const [numberOfNotificationEvents, setNumberOfNotificationEvents] = useState(0);
    const [numberOfDocuments, setNumberOfDocuments] = useState(0);

    useEffect(() => {
        const user = authenticate.getUser();
        async function fetchNumberOfDevices() {
            const numberOfDevices = await dataHandler.countUserDevices(user.id);
            setNumberOfUserDevices(numberOfDevices);
        }
        async function fetchNumberOfSpaces() {
            const numberOfSpaces = await dataHandler.countUserSpaces(user.id);
            setNumberOfUserSpaces(numberOfSpaces);
        }
        async function fetchNumberOfEvents() {
            const numberOfEvents = await dataHandler.countUserEventNotifications(user.id);
            setNumberOfNotificationEvents(numberOfEvents);
        }
        async function fetchNumberOfDocuments() {
            const numberOfDocuments = await dataHandler.countUserDocuments(user.id);
            setNumberOfDocuments(numberOfDocuments);
        }
        fetchNumberOfDevices();
        fetchNumberOfSpaces();
        fetchNumberOfEvents();
        fetchNumberOfDocuments();
    })

    return (
        <div className="mainPanelFirstSection">
            <MuiBox onClick={() => navigate('/dashboard/devices')} iconClass="fa-solid fa-display" headerText="Devices" valueText={numberOfUserDevices} downInfoText="Total number of devices linked to your account."/>
            <MuiBox onClick={() => navigate('/dashboard/spaces')} headerText="Spaces" valueText={numberOfUserSpaces} downInfoText="Total number of spaces linked to your account." iconColor="linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"/>
            <MuiBox onClick={() => navigate('/dashboard/devices')} headerText="Documents" valueText={numberOfDocuments} downInfoText="Total number of documents linked to your account." iconColor="linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))"/>
            <MuiBox onClick={() => navigate('/dashboard/devices')} headerText="Reminders" valueText={numberOfNotificationEvents} downInfoText="Total number of reminders you have set for your account." iconColor="linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))"/>
        </div>
    )
}


export default MainPanelFirstSection;
