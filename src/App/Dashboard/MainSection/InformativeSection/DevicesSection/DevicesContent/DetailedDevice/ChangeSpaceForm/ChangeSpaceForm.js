import './ChangeSpaceForm.css'
import {useEffect, useState} from "react";
import {authenticate} from "../../../../../../../Authenticate/authenticate";
import {dataHandler} from "../../../../../../../Api/dataHandler";
import DashboardContentButton from "../../../../../../Buttons/DashboardContentButton/DashboardContentButton";

const ChangeSpaceForm = props => {
    const [userSpaces, setUserSpaces] = useState([]);
    const [selectedSpaceId, setSelectedSpaceId] = useState(null);
    const userSpacesList = userSpaces.map((s) => {
        return (
            <option key={s.id} value={s.id}>{s.name}</option>
        )
    })

    useEffect(() => {
        async function fetchSpaces() {
            const user = authenticate.getUser();
            const userSpaces = await dataHandler.getSpacesForUser(user.id);
            setUserSpaces(userSpaces);
        }
        fetchSpaces();
    }, [])

    const handleSpaceSelectionChange = (event) => {
        setSelectedSpaceId(event.target.value);
    };

    async function handleSubmit(e) {
        e.preventDefault();
        await dataHandler.assignDeviceToSpace(props.device.id, selectedSpaceId);
        window.location.reload();
    }


    return (
        <form className="changeSpaceFormInside" onSubmit={handleSubmit}>
            <select defaultValue="" onChange={handleSpaceSelectionChange}>
                <option defaultValue="" className="deviceOption" value="" disabled>Select space</option>
                {userSpaces && userSpacesList}
            </select>
            <DashboardContentButton text="Submit"/>
        </form>
    )
}


export default ChangeSpaceForm;
