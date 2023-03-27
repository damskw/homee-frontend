import './DisplayDevices.css'
import {useEffect, useState} from "react";
import {authenticate} from "../../../../../../Authenticate/authenticate";
import {dataHandler} from "../../../../../../Api/dataHandler";
import SingleDevice from "./SingleDevice/SingleDevice";
import DevicesContentHeader from "./DevicesContentHeader/DevicesContentHeader";


const DisplayDevices = props => {

    const [devices, setDevices] = useState([]);
    const [user, setUser] = useState(null);
    const devicesList = devices.map((d) =>
    {
        console.log(d);
        return <SingleDevice key={d.id} device={d}/>
    }
    );

    useEffect(() => {
        const user = authenticate.getUser();
        async function fetchDevices() {
            const devices = await dataHandler.getDevicesForUser(user.id);
            setDevices(devices);
        }
        fetchDevices();
        setUser(user);
    }, [])


    return (
        <div className="displayDevices">
            <DevicesContentHeader user={user}/>
            <div className="allDevices">
                {devicesList}
            </div>

        </div>
    )
}


export default DisplayDevices;
