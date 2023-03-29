import './MainPanelSecondSection.css'
import MuiBoxWide from "./MuiBoxWide/MuiBoxWide";
import {useEffect, useState} from "react";
import {authenticate} from "../../../../../Authenticate/authenticate";
import {dataHandler} from "../../../../../Api/dataHandler";
import SingleActivity from "./SingleActivity/SingleActivity";


const MainPanelSecondSection = props => {

    const blueBackground = "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"
    const [deviceActivities, setDeviceActivities] = useState([]);
    const activitiesList = deviceActivities.map((a) =>
        {
            if (a.activityType === "INFORMATION") {
                return <SingleActivity key={a.id} date={a.date} background={blueBackground} description={a.description} deviceName={a.deviceName} />
            }
            return null;
        }
    );

    useEffect(() => {
        const user = authenticate.getUser();

        async function fetchDeviceActivities() {
            const activities = await dataHandler.getActivitiesForUserDevices(user.id);
            setDeviceActivities(activities);
        }

        fetchDeviceActivities()
    }, [])

    return (
        <div className="mainPanelSectionSection">
            <MuiBoxWide content={activitiesList} title="Recent activities"/>
        </div>
    )
}


export default MainPanelSecondSection;
