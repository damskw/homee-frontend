import './DisplaySpaces.css'
import {useEffect, useState} from "react";
import {authenticate} from "../../../../../../Authenticate/authenticate";
import {dataHandler} from "../../../../../../Api/dataHandler";
import SingleSpace from "../SingleSpace/SingleSpace";
import SpacesContentHeader from "../SpacesContentHeader/SpacesContentHeader";

const DisplaySpaces = props => {

    const [spaces, setSpaces] = useState([]);
    const [user, setUser] = useState(null);
    const spacesList = spaces.map((space) =>
        <SingleSpace key={space.id} space={space}/>
    );

    useEffect(() => {
        const user = authenticate.getUser();
        async function fetchSpaces() {
            const spaces = await dataHandler.getSpacesForUser(user.id);
            setSpaces(spaces);
        }
        fetchSpaces();
        setUser(user);
    }, [])

    return (
        <div className="displaySpaces">
            <SpacesContentHeader user={user}/>
            {spacesList}
        </div>
    )
}


export default DisplaySpaces;
