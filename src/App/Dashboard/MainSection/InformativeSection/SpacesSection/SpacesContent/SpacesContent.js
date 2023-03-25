import './SpacesContent.css'
import {useLocation} from "react-router-dom";
import DisplaySpaces from "./DisplaySpaces/DisplaySpaces";
import SpaceForm from "./SpaceForm/SpaceForm";

const SpacesContent = props => {

    const location = useLocation();
    const croppedLocation = location.pathname.substring('/dashboard/spaces'.length + 1);
    const addSpaceLocation = "add-space";
    const editSpaceLocation = "edit-space";

    function displayContent() {
        switch (croppedLocation) {
            case addSpaceLocation:
                return <SpaceForm/>
            case editSpaceLocation:
                return <SpaceForm space={props.space}/>
            default:
                return <DisplaySpaces/>
        }
    }


    return (
        <div className="spacesContent">
            {displayContent()}
        </div>
    )
}


export default SpacesContent;
