import './SingleSpace.css'
import DashboardContentButton from "../../../../../Buttons/DashboardContentButton/DashboardContentButton";
import {useNavigate} from "react-router-dom";
import {dataHandler} from "../../../../../../Api/dataHandler";

const SingleSpace = props => {

    const navigate = useNavigate();


    const onEditClickAction = () => {
        navigate(`/dashboard/spaces/edit-space?spaceId=${props.space.id}`);
    }

    async function onDeleteClickAction() {
        await dataHandler.deleteSpaceWithDevices(props.space.id);
        window.location.reload();
    }


    return (
        <div className="singleSpace">
            <div className="singleSpaceEditDelete">
                <div className="singleSpaceEditDeleteIcons">
                    <i onClick={onEditClickAction} id="editSpaceIcon" className="fa-solid fa-pen-to-square"></i>
                    <i onClick={onDeleteClickAction} id="deleteSpaceIcon" className="fa-regular fa-circle-xmark"></i>
                    <h2>{props.space.name}</h2>
                </div>
                <div>
                    {props.space.about}
                </div>

            </div>
            <div className="singleSpaceRight">
                <DashboardContentButton text="Add device"/>
                <DashboardContentButton text="View devices"/>
            </div>
        </div>
    )
}


export default SingleSpace;
