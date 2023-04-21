import './SingleSpace.css'
import DashboardContentButton from "../../../../../Buttons/DashboardContentButton/DashboardContentButton";
import {useNavigate} from "react-router-dom";
import {dataHandler} from "../../../../../../Api/dataHandler";
import React, {useEffect, useState} from "react";
import {authenticate} from "../../../../../../Authenticate/authenticate";
import PropsContentModal from "../../../../../Modals/PropsContentModal";
import SmallDownloadButton from "../../../../../Buttons/SmallDownloadButton/SmallDownloadButton";

const SingleSpace = props => {

    const navigate = useNavigate();
    const [isOwner, setIsOwner] = useState(false);
    const [user, setUser] = useState(null);
    const [isModalDetach, setIsModalDetach] = useState(false);
    const [isModalDelete, setIsModalDelete] = useState(false);


    const onEditClickAction = () => {
        navigate(`/dashboard/spaces/edit-space?spaceId=${props.space.id}`);
    }

    async function onDeleteClickAction() {
        await dataHandler.deleteSpaceWithDevices(props.space.id);
        window.location.reload();
    }

    function onUnassignedClickAction() {
        setIsModalDetach(true);
    }

    const handleViewDetails = () => {
        navigate(`/dashboard/spaces/${props.space.id}`)
    }


    const viewManageButtons = () => {
        return (
            <div className="singleSpaceEditDeleteIcons">
                <i onClick={onEditClickAction} id="editSpaceIcon" className="fa-solid fa-pen-to-square"></i>
                <i onClick={() => setIsModalDelete(true)} id="deleteSpaceIcon" className="fa-regular fa-circle-xmark"></i>
                <h2>{props.space.name}</h2>
            </div>
        )
    }

    const viewWithoutButtons = () => {
        return (
            <div className="singleSpaceEditDeleteIcons">
                <i onClick={onUnassignedClickAction} id="deleteSpaceIcon" className="fa-solid fa-calendar-xmark"></i>
                <h2>{props.space.name}</h2>
            </div>
        )
    }

    const modalDetachContent = () => {
        return (
            <div>
                <h3>Are you sure you want to remove space {props.space.name} from your account?</h3>
                <div className="singleDocumentModalYesNo">
                    <SmallDownloadButton action={onDetachConfirmAction} class='buttonGreen' text="Yes"/>
                    <SmallDownloadButton action={() => setIsModalDetach(false)} class='buttonRed' text="No"/>
                </div>
            </div>
        )
    }

    const modalDeleteContent = () => {
        return (
            <div>
                <h3>Are you sure you want to permanently delete space {props.space.name} along with it's devices from your account?</h3>
                <div className="singleDocumentModalYesNo">
                    <SmallDownloadButton action={onDeleteClickAction} class='buttonGreen' text="Yes"/>
                    <SmallDownloadButton action={() => setIsModalDelete(false)} class='buttonRed' text="No"/>
                </div>
            </div>
        )
    }

    const onDetachConfirmAction = async () => {
        await dataHandler.unassignedSpaceFromUser(props.space.id, user.id);
        window.location.reload();
    }

    const onModalCloseAction = () => {
        setIsModalDelete(false);
        setIsModalDetach(false);
    }

    useEffect(() => {
        const user = authenticate.getUser();
        setUser(user);
        setIsOwner(props.space.ownerId === user.id);
    }, [])


    return (
        <div className="singleSpace">
            {isModalDetach ? <PropsContentModal content={modalDetachContent()} onClose={onModalCloseAction}/> : null}
            {isModalDelete ? <PropsContentModal content={modalDeleteContent()} onClose={onModalCloseAction}/> : null}
            <div className="singleSpaceEditDelete">
                {isOwner ? viewManageButtons() : viewWithoutButtons()}
                <div>
                    {props.space.about}
                </div>

            </div>
            <div className="singleSpaceRight">
                <DashboardContentButton action={handleViewDetails} text="View details"/>
            </div>
        </div>
    )
}


export default SingleSpace;
