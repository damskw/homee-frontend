import './AddTaskForm.css'
import SmallDownloadButton from "../../../../../../Buttons/SmallDownloadButton/SmallDownloadButton";
import {dataHandler} from "../../../../../../../Api/dataHandler";

;


const AddTaskForm = props => {

    const devicesAvailable = props.devices;
    const devicesList = devicesAvailable.map((d) =>
        <option className="eventOption" key={d.id} value={d.id}>{d.name}</option>
    )


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        data.userId = props.userId;
        const newTask = await dataHandler.addNewTask(data);
        if (!newTask) {
            props.onFailSubmit();
            return;
        }
        props.onSuccessSubmit();
    }



    return (
        <div className="updateDeviceImage">
            <h2>Add task to a user</h2>
            <span className="spanGrey">This form will allow you to add a task to a selected user</span>
            <form className="onDocumentUploadForm eventForm" onSubmit={handleSubmit}>
                <label htmlFor="name" className="eventFormLabel">Task's name</label>
                <input name="name" className="fileTitle" type="text" placeholder="Task's name"></input>
                <label htmlFor="description" className="eventFormLabel">Description</label>
                <input name="description" className="fileTitle" type="text" placeholder="Description"></input>
                <label htmlFor="deadline" className="eventFormLabel">Task's deadline</label>
                <input name="deadline" className="fileTitle dateField" type="date"></input>
                <select name="deviceId" className="eventTypesSelect" defaultValue="" required>
                    <option className="deviceOption" value="" disabled>Select device</option>
                    {devicesList}
                </select>
                <div>
                    <SmallDownloadButton class="buttonGreyWhite" text="Submit"/>
                </div>
            </form>
        </div>
    )
}


export default AddTaskForm;
