import './DevicesForm.css'
import arrowBack from "../../../../../../../assets/icons/arrow_back.png";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {dataHandler} from "../../../../../../Api/dataHandler";
import {authenticate} from "../../../../../../Authenticate/authenticate";
import DashboardContentButton from "../../../../../Buttons/DashboardContentButton/DashboardContentButton";


const DevicesForm = props => {

    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('deviceId');
    const [device, setDevice] = useState(null);
    const [user, setUser] = useState("");
    const [spaces, setSpaces] = useState([]);
    const [deviceTypes, setDeviceTypes] = useState([]);
    const spacesList = spaces.map((s) =>
        <option className="deviceOption" key={s.id} value={s.id}>{s.name}</option>
    );
    const deviceTypesList = deviceTypes.map((t, index) =>
        <option className="deviceOption" key={index} value={t}>{t}</option>
    )


    useEffect (() => {
        const user = authenticate.getUser();
        setUser(user);
        async function fetchDevice() {
            const deviceApi = await dataHandler.getSingleDevice(id);
            setDevice(deviceApi);
        }
        async function fetchUserSpaces() {
            const userSpaces = await dataHandler.getSpacesForUser(user.id);
            setSpaces(userSpaces);
        }
        async function getDeviceTypes() {
            const deviceTypes = await dataHandler.getDeviceTypes();
            setDeviceTypes(deviceTypes);
        }
        fetchUserSpaces();
        getDeviceTypes();
        if (id) {
            fetchDevice();
        }
    }, [id]);

    async function onSubmitAddDevice(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        const spaceId = data.spaceId;
        delete data.spaceId;
        const newDevice = await dataHandler.addNewDevice(data);
        await dataHandler.assignDeviceToSpace(newDevice.id, spaceId);
        navigate('/dashboard/devices')
    }

    // TODO
    async function onSubmitEdit(e) {
        console.log(user);
        // e.preventDefault();
        // const data = Object.fromEntries(new FormData(e.target).entries());
        // data.id = id;
        // console.log(data);
        // navigate('/dashboard/devices')
    }

    const onArrowClick = () => {
        navigate('/dashboard/devices');
    }

    return (
        <div className="devicesFormWrapper">
            <div className="devicesFormHeader">

                <div className="devicesArrowBack" onClick={onArrowClick}>
                    <img rel="icon" src={arrowBack} alt="arrowBack"/>
                </div>
                <div className="devicesFormTitle">
                    {device ? <h1>Edit device</h1> : <h1>Add new device</h1>}
                </div>
            </div>
            <div className="devicesForm">
                <form onSubmit={device ? onSubmitEdit : onSubmitAddDevice}>
                    <input required type="text" defaultValue={device?.name || ""} name="name" placeholder={device ? device.name : "Name"}/>
                    <input required type="text" defaultValue={device?.model || ""} name="model" placeholder={device ? device.model : "Model"}/>
                    <select name="deviceType" className="deviceTypes" defaultValue="" required>
                        <option className="deviceOption" value="" disabled>Select device type</option>
                        {deviceTypesList}
                    </select>
                    <input required type="text" defaultValue={device?.spot || ""} name="spot" placeholder={device ? device.spot : "Spot"}/>
                    <input type="text" defaultValue={device?.warrantyStart || ""} name="warrantyStart" placeholder={device ? device.warrantyStart : "(Optional) Warranty start [RRRR-mm-DD]"}/>
                    <input type="text" defaultValue={device?.warrantyEnd || ""} name="warrantyEnd" placeholder={device ? device.warrantyEnd : "(Optional) Warranty end [RRRR-mm-DD]"}/>
                    <input type="text" defaultValue={device?.purchaseDate || ""} name="purchaseDate" placeholder={device ? device.purchaseDate : "(Optional) Purchase date [RRRR-mm-DD]"}/>
                    <input type="number" defaultValue={device?.purchasePrice || ""} name="purchasePrice" placeholder={device ? device.purchasePrice : "(Optional) Purchase price"}/>
                    <textarea cols="25" rows="3" required defaultValue={device?.about || ""} name="about" placeholder={device ? device.about : "Description"}/>
                    <select name="spaceId" className="selectSpaces" defaultValue="" required>
                        <option className="deviceOption" value="" disabled>Select your space</option>
                        {spacesList}
                    </select>
                    <DashboardContentButton text="Submit"/>
                </form>
            </div>
        </div>

    )
}


export default DevicesForm;
