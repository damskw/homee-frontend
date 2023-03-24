import './SpacesSection.css'
import {useEffect, useState} from "react";
import {dataHandler} from "../../../../Api/dataHandler";
import {authenticate} from "../../../../Authenticate/authenticate";

const SpacesSection = props => {
    const [spaces, setSpaces] = useState([]);

    useEffect(() => {
        const user = authenticate.getUser();
        async function fetchSpaces() {
            const spaces = await dataHandler.getSpacesForUser(user.id);
            setSpaces(spaces);
        }

        fetchSpaces();
    }, [])

    return (
        <div className="spacesSection">
            <h1>Spaces</h1>
            <ul>
                {spaces.map((space) => (
                    <li key={space.id}>{space.name}</li>
                ))}
            </ul>
        </div>
    )
}


export default SpacesSection;
