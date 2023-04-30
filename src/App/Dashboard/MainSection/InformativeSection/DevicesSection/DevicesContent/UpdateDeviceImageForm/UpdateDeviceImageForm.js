import './UpdateDeviceImageForm.css'
import {useState} from "react";
import {dataHandler} from "../../../../../../Api/dataHandler";
import SmallDownloadButton from "../../../../../Buttons/SmallDownloadButton/SmallDownloadButton";


const UpdateDeviceImageForm = props => {

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
            <h2>Change image for your device</h2>
            <span className="spanGrey">Upload image that represents your device.
                <br/>Only image file is accepted and it cannot be bigger than 5MB.</span>
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


export default UpdateDeviceImageForm;
