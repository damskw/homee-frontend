import './HeaderSearchBar.css'
import {useState} from "react";
import {dataHandler} from "../../../../../Api/dataHandler";
import {authenticate} from "../../../../../Authenticate/authenticate";
import {useNavigate} from "react-router-dom";

const HeaderSearchBar = props => {

    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    // const debounceSearch = useDebounce(search, 500);
    const [isDrop, setIsDrop] = useState(false);
    const [devicesList, setDevicesList] = useState([]);

    const handleOnDeviceClick = (deviceId) => {
        setSearch('');
        setDevicesList([]);
        navigate(`/dashboard/devices/${deviceId}`)
    }


    const handleSearch = async (e) => {
        setSearch(e.target.value);
        const userId = authenticate.getUser().id;
        const devices = await dataHandler.searchForUserDevices(userId, search);
        const deviceElements = devices.map((d) => (
            <div className="singleDropdownDevice" key={d.id} onClick={() => handleOnDeviceClick(d.id)}>
                <li>{d.name}</li>
            </div>
        ));
        setDevicesList(deviceElements);
    }


    return (
        <div>
            <input value={search} onFocus={() => setIsDrop(true)} onBlur={() => setIsDrop(false)} onChange={(e) => handleSearch(e)} className="headerSearchBar" type="text"
                   placeholder="Search for a device"/>
            <div className={`dropdownDevices ${isDrop ? 'show' : ''}`}>
                {devicesList}
            </div>
        </div>
    )
}


export default HeaderSearchBar;
