import './SpacesContent.css'
import {useLocation} from "react-router-dom";
import DisplaySpaces from "./DisplaySpaces/DisplaySpaces";
import SpaceForm from "./SpaceForm/SpaceForm";
import DetailedSpace from "./DetailedSpace/DetailedSpace";

const SpacesContent = props => {

    const location = useLocation();
    const croppedLocation = location.pathname.substring('/dashboard/spaces'.length);
    const addSpaceLocation = "/add-space";
    const editSpaceLocation = "/edit-space";

    function displayContent() {
        switch (croppedLocation) {
            case addSpaceLocation:
                return <SpaceForm/>
            case editSpaceLocation:
                return <SpaceForm space={props.space}/>
            default:
                if (croppedLocation.startsWith('/')) {
                    return <DetailedSpace/>;
                } else {
                    return <DisplaySpaces/>;
                }
        }
    }


    return (
        <div className="spacesContent">
            {displayContent()}
        </div>
    )
}


export default SpacesContent;
