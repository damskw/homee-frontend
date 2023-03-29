import './SpacesContentHeader.css'
import DashboardContentButton from "../../../../../Buttons/DashboardContentButton/DashboardContentButton";
import {useNavigate} from "react-router-dom";


const SpacesContentHeader = props => {
    const navigate = useNavigate();


    const navigateToAddSpace = () => {
        navigate('/dashboard/spaces/add-space')
    }

    return (
        <div className="spacesContentHeader">
            {props.user && <h1>{props.user.name}'s spaces</h1>}
            <DashboardContentButton action={navigateToAddSpace} text="Add space"/>
        </div>
    )
}


export default SpacesContentHeader;
