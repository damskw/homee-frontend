import './AddEventForm.css'
import SmallDownloadButton from "../../../../../../Buttons/SmallDownloadButton/SmallDownloadButton";
import {useEffect, useState} from "react";
import {dataHandler} from "../../../../../../../Api/dataHandler";


const AddEventForm = props => {

    const [eventTypes, setEventTypes] = useState([]);
    const [isNotification, setNotification] = useState(false);
    const eventTypesList = eventTypes.map((e, index) =>
        <option className="eventOption" key={index} value={e}>{e}</option>
    )

    useEffect(() => {
        async function getEventTypes() {
            const eventTypes = await dataHandler.getEventTypes();
            setEventTypes(eventTypes);
        }

        getEventTypes();
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        data.deviceId = props.d.id;
        data.notification === "on" ? data.notification = "true" : data.notification = "false";
        await dataHandler.addNewEvent(data);
        window.location.reload();
    }



    return (
        <div className="updateDeviceImage">
            <h2>Add custom event to your device</h2>
            <span className="spanGrey">You can add future or past event related to your device.
                <br/>All events will appear in events history.
            <br/>If you want you can also set a notification to be informed about planned event.</span>
            <form className="onDocumentUploadForm eventForm" onSubmit={handleSubmit}>
                <label htmlFor="name" className="eventFormLabel">Event's name</label>
                <input name="name" className="fileTitle" type="text" placeholder="Event's name"></input>
                <label htmlFor="eventType" className="eventFormLabel">Event's type</label>
                <select name="eventType" className="eventTypesSelect" defaultValue="" required>
                    <option className="deviceOption" value="" disabled>Select event type</option>
                    {eventTypesList}
                </select>
                <label htmlFor="notification" className="eventFormLabel">Do you want to be notified?</label>
                <input id="notificationCheckBox" type="checkbox" onChange={() => setNotification(!isNotification)} name="notification"></input>
                {isNotification && (
                    <>
                        <label htmlFor="notificationTime" className="eventFormLabel">Select notification date</label>
                        <input name="notificationTime" className="fileTitle dateField" type="date"></input>
                    </>

                )}
                <label htmlFor="scheduledAt" className="eventFormLabel">Event scheduled at</label>
                <input name="scheduledAt" className="fileTitle dateField" type="date"></input>
                <div>
                    <SmallDownloadButton class="buttonGreyWhite" text="Submit"/>
                </div>
            </form>
        </div>
    )
}


export default AddEventForm;
