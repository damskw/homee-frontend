import './UpdateDeviceImageForm.css'
import {useState} from "react";
import {dataHandler} from "../../../../../../Api/dataHandler";


const UpdateDeviceImageForm = props => {

    const [selectedFile, setSelectedFile] = useState();
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('deviceId');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('file', selectedFile);
        formData.append('deviceId', id);
        const response = await dataHandler.uploadDeviceImage(formData);
        console.log(response)
    }

    const changeHandler = (e) => {
        setSelectedFile(e.target.files[0]);
    }


    return (
        <div className="updateDeviceImage">
            <form onSubmit={handleSubmit}>
                <input type="file" name="file" onChange={changeHandler}/>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}


export default UpdateDeviceImageForm;
