import './AddEventForm.css'
import {useState} from "react";
import SmallDownloadButton from "../../../../../../Buttons/SmallDownloadButton/SmallDownloadButton";
import {dataHandler} from "../../../../../../../Api/dataHandler";


const AddEventForm = props => {

    const [selectedFile, setSelectedFile] = useState();
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('file', selectedFile);
        formData.append('deviceId', props.d.id);
        const response = await dataHandler.uploadDeviceImage(formData);
        if (response.error) {
            setIsError(true);
            return;
        }
        window.location.reload();
    }

    const changeHandler = (e) => {
        setSelectedFile(e.target.files[0]);
    }


    return (
        <div className="updateDeviceImage">
            <h2>Add custom event to your device</h2>
            <span className="spanGrey">You can add future or past event related to your device.
                <br/>All events will appear in events history.
            <br/>If you want you can also set a notification to be informed about planned event.</span>
            {isError ? <h1 className="error">Error - file name contains unaccepted characters or file size is too large.</h1> : null}
            <form className="onDocumentUploadForm" onSubmit={handleSubmit}>
                <label htmlFor="file" className="custom-file-upload">Click to choose your image</label>
                <input id="file" type="file" name="file" onChange={changeHandler}/>
                <div>
                    <SmallDownloadButton class="buttonGreyWhite" text="Submit"/>
                </div>
            </form>
        </div>
    )
}


export default AddEventForm;
