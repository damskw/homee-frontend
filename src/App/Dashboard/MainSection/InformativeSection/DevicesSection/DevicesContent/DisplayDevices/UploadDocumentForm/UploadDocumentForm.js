import './UploadDocumentForm.css'
import {useState} from "react";
import {dataHandler} from "../../../../../../../Api/dataHandler";
import SmallDownloadButton from "../../../../../../Buttons/SmallDownloadButton/SmallDownloadButton";


const UploadDocumentForm = props => {

    const [selectedFile, setSelectedFile] = useState();
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('file', selectedFile);
        formData.append('deviceId', props.d.id);
        formData.append('documentName', e.target.title.value);
        const response = await dataHandler.uploadDocument(formData);
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
            <h2>Upload document for your device</h2>
            <span className="spanGrey">Upload any document you'd like to link it with your device.
                <br/>All files are accepted but attachment cannot be bigger than 5MB.</span>
            {isError ? <h1 className="error">Error - file name contains unaccepted characters or file size is too large.</h1> : null}
            <form className="onDocumentUploadForm" onSubmit={handleSubmit}>
                <label htmlFor="file" className="custom-file-upload">Click to choose your document</label>
                <input id="file" type="file" name="file" onChange={changeHandler}/>
                <input className="fileTitle" name="title" type="text" placeholder="Document's title" />
                <div>
                    <SmallDownloadButton class="buttonGreyWhite" text="Submit"/>
                </div>
            </form>
        </div>
    )
}


export default UploadDocumentForm;
