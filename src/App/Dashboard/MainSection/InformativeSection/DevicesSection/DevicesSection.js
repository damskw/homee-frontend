import './DevicesSection.css'
import {useEffect, useState} from "react";
import {authenticate} from "../../../../Authenticate/authenticate";
import {dataHandler} from "../../../../Api/dataHandler";


const DevicesSection = props => {

    const [devices, setDevices] = useState([]);

    useEffect(() => {
        const user = authenticate.getUser();
        async function fetchSpaces() {
            const devices = await dataHandler.getDevicesForUser(user.id);
            setDevices(devices);
        }

        fetchSpaces();
    }, [])

    return (
        <div className="devicesSection">
            <h1>Device section</h1>
            <ul>
                {devices.map((device) => (
                    <li key={device.id}>{device.name}</li>
                ))}
            </ul>
        </div>
    )
}


export default DevicesSection;
