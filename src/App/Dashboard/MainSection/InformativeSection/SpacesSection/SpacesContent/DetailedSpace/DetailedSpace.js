import './DetailedSpace.css'
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {dataHandler} from "../../../../../../Api/dataHandler";
import Profiler from "../../../Profiler/Profiler";
import DashboardContentButton from "../../../../../Buttons/DashboardContentButton/DashboardContentButton";
import tempImage from '../../../../../../../assets/dashboard/device_avatar.jpg'
import ProfilerHeader from "../../../Profiler/ProfilerHeader/ProfilerHeader";
import PropsContentModal from "../../../../../Modals/PropsContentModal";
import ProfilerFullWide from "../../../Profiler/ProfilerFullWide/ProfilerFullWide";
import SingleDevice from "../../../DevicesSection/DevicesContent/DisplayDevices/SingleDevice/SingleDevice";
import SmallDownloadButton from "../../../../../Buttons/SmallDownloadButton/SmallDownloadButton";
import {authenticate} from "../../../../../../Authenticate/authenticate";


const DetailedSpace = props => {

    const navigate = useNavigate();
    const {spaceId} = useParams();
    const [space, setSpace] = useState(null);
    const [isModal, setIsModal] = useState(false);
    const [devices, setDevices] = useState([]);
    const [isInviteSent, setIsInviteSent] = useState(false);
    const [isOwner, setIsOwner] = useState(false);
    const devicesList = devices.map((d) => {
            return <SingleDevice key={d.id} device={d}/>
        }
    );
    const optionList = () => {
        return <option value="example@email.com"/>
    }

    useEffect(() => {
        if (!spaceId) {
            navigate('/dashboard/spaces')
        }

        async function fetchSpace() {
            const space = await dataHandler.getSingleSpace(spaceId);
            space ? setSpace(space) : navigate('/dashboard/spaces');
            setIsOwner(space.ownerId === user.id);
        }

        async function fetchDevices() {
            const devices = await dataHandler.getDevicesForSpace(spaceId);
            setDevices(devices);
        }
        fetchSpace();
        fetchDevices();
        const user = authenticate.getUser();
    }, [navigate, spaceId])

    const addNewDeviceHandler = () => {
        navigate('/dashboard/devices/add-device');
    }

    const profilerContentButtons = () => {
        return (
            <div className="detailedSpaceHeaderButtons">
                {isOwner ? <DashboardContentButton action={() => {
                    setIsModal(true);
                    setIsInviteSent(false);
                }
                } text="Share space"/> : null}
                <DashboardContentButton action={addNewDeviceHandler} text="Add new device"/>
            </div>
        )
    }

    const profilerWideSectionContent = () => {
        return (
            <div className="detailedSpaceWide">
                <div>
                    <h4 className="h4noBottom">{space && space.name}'s devices</h4>
                    <span className="spanGrey">All devices associated with this space</span>
                </div>
                <div className="allDevices">
                    {devicesList.length >= 1 ? devicesList : <h4>No devices found for this space. </h4>}
                </div>
            </div>
        )
    }

    const profilerContent = () => {
        return (
            <div>
                {isModal ? <PropsContentModal content={isInviteSent ? modalContentInviteSent() : modalContent()} onClose={() => setIsModal(false)}/> : null}
                <ProfilerHeader profilerImage={tempImage} name={space && space.name} nameUnder="Your space"
                                buttonsContent={profilerContentButtons()}/>
                <ProfilerFullWide content={profilerWideSectionContent()}/>
            </div>
        )
    }

    const handleInviteSubmit = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        data.spaceId = space.id;
        await dataHandler.shareSpace(data);
        setIsInviteSent(true);
    }

    const modalContentInviteSent = () => {
        return (
            <div>
                <h1 className="detailedSpaceInviteSentHeader">&#10004; Invitation sent successfully.</h1>
                <SmallDownloadButton action={() => setIsModal(false)} class="buttonGreen" text="Acknowledge"/>
            </div>
        )
    }

    const modalContent = () => {
        return (
            <div className="detailedSpaceModalContent">
                <h4>Please enter valid e-mail of a user you wish to invite.</h4>
                <span className="spanGrey">
                    If user with provided e-mail exists one will receive invitation to share space.
                    <br/>
                    <br/>
                    Please make sure you've provided valid e-mail address as we as a company cannot provide our list of users.
                </span>
                <form className="detailedSpaceModalContentForm" onSubmit={handleInviteSubmit}>
                    <input name="invitationEmail" list="suggestions" className="headerSearchBar" type="text"
                           placeholder="Invite user with e-mail"/>
                    <datalist id="suggestions">
                        {optionList()}
                    </datalist>
                    <DashboardContentButton text="Send invite"/>
                </form>
            </div>
        )
    }

    return (
        <Profiler content={profilerContent()}/>
    );
}


export default DetailedSpace;
