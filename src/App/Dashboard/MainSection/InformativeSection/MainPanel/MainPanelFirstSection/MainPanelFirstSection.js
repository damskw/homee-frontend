import './MainPanelFirstSection.css'
import MuiBox from "./MuiBox/MuiBox";
import {useEffect, useState} from "react";
import {authenticate} from "../../../../../Authenticate/authenticate";
import {dataHandler} from "../../../../../Api/dataHandler";


const MainPanelFirstSection = props => {

    const [numberOfUserDevices, setNumberOfUserDevices] = useState(0);
    const [numberOfUserSpaces, setNumberOfUserSpaces] = useState(0);

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
        fetchNumberOfDevices();
        fetchNumberOfSpaces();
    })

    return (
        <div className="mainPanelFirstSection">
            <MuiBox iconClass="fa-solid fa-display" headerText="Your devices" valueText={numberOfUserDevices} downInfoText="Recently updated."/>
            <MuiBox headerText="Your spaces" valueText={numberOfUserSpaces} downInfoText="down info text" iconColor="linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"/>
            <MuiBox headerText="HeaderText" valueText="valueText" downInfoText="down info text" iconColor="linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))"/>
            <MuiBox headerText="Reminders" valueText="2" downInfoText="down info text" iconColor="linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))"/>
        </div>
    )
}


export default MainPanelFirstSection;
