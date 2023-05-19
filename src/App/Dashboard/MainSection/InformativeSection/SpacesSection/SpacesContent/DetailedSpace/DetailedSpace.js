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
import SingleSpaceUser from "./SingleSpaceUser/SingleSpaceUser";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import {Alert} from "@mui/material";
import SingleTaskModal from "./SingleTaskModal/SingleTaskModal";
import * as PropTypes from "prop-types";


function DataGrid(props) {
    return null;
}

DataGrid.propTypes = {
    initialState: PropTypes.shape({
        pagination: PropTypes.shape({
            paginationModel: PropTypes.shape({
                pageSize: PropTypes.number,
                page: PropTypes.number
            })
        })
    }),
    pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
    columns: PropTypes.any,
    checkboxSelection: PropTypes.bool,
    rows: PropTypes.any
};
const DetailedSpace = props => {

    const navigate = useNavigate();
    const {spaceId} = useParams();
    const [taskUser, setTaskUser] = useState(null);
    const [space, setSpace] = useState(null);
    const [isModal, setIsModal] = useState(false);
    const [isAlert, setIsAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('');
    const [alertText, setAlertText] = useState('');
    const [isTaskModal, setIsTaskModal] = useState(false);
    const [isAddingTask, setIsAddingTask] = useState(false);
    const [userTasks, setUserTasks] = useState([]);
    const [devices, setDevices] = useState([]);
    const [isInviteSent, setIsInviteSent] = useState(false);
    const [isOwner, setIsOwner] = useState(false);
    const [isShowingUsers, setIsShowingUsers] = useState(false);
    const [spaceUsers, setSpaceUsers] = useState([]);
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

    const fetchUsersInSpace = async () => {
        const usersDb = await dataHandler.getUsersForSpace(spaceId);
        const usersList = usersDb.map((u) => {
                return <SingleSpaceUser onTaskListClick={() => handleOnViewTasksClick(u)} onPlusClick={() => handleOnAddTaskClick(u)} key={u.id} user={u}/>
            }
        );
        setSpaceUsers(usersList);
    }

    const fetchUserTasks = async (userId) => {
        const userTasksDb = await dataHandler.getTasksForUser(userId);
        const userTaskList = userTasksDb.map((t) => {
            return <SingleTaskModal key={t.id} task={t}/>
        })
        setUserTasks(userTaskList);
    }

    const handleOnShowUsersClick = async () => {
        setIsShowingUsers(!isShowingUsers);
        if (spaceUsers.length === 0) {
            await fetchUsersInSpace();
        }
    }

    const handleOnAddTaskClick = (u) => {
        setIsTaskModal(true);
        setIsAddingTask(true);
        setTaskUser(u);
    }

    const handleOnViewTasksClick = async (user) => {
        setTaskUser(user);
        setIsTaskModal(true);
        setIsAddingTask(false);
        if (userTasks.length === 0) {
            await fetchUserTasks(user.id);
        }
    }

    const profilerWideSectionContent = () => {
        return (
            <div className="detailedSpaceWide">
                <div className="usersInSpaceWrapper">
                    <div className="usersInSpace">
                        <div className="usersInSpaceHeader" onClick={handleOnShowUsersClick}>
                            <div className="usersInSpaceHeaderTitle">
                                <span>{isShowingUsers ? "Hide users" : "Show users"}</span>
                            </div>
                            <i className={isShowingUsers ? "fa-solid fa-arrow-down rotate" : "fa-solid fa-arrow-down noRotate"}></i>
                        </div>
                        <div className={isShowingUsers ? "usersShowing" : "usersHidden"}>
                            {spaceUsers}
                        </div>
                    </div>
                </div>
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

    const onAddTaskSuccessSubmit = () => {
        setIsTaskModal(false);
        setAlertSeverity('success')
        setAlertText("Task has been added successfully.");
        setIsAlert(true);
    }

    const onTaskAddFailSubmit = () => {
        setIsTaskModal(false);
        setAlertSeverity('error')
        setAlertText("Error, task couldn't be added. Please check input data and try again.");
        setIsAlert(true);
    }

    const taskModalContentAddTask = () => {
        return (
            <>
                <AddTaskForm onFailSubmit={onTaskAddFailSubmit} onSuccessSubmit={onAddTaskSuccessSubmit} userId={taskUser.id} devices={devices}/>
            </>
        )
    }

    const taskModalContentViewTasks = () => {
        return (
            <>
                <h2>Tasks for user {taskUser.username}</h2>
                <div className="allTasksModal">
                    <div className="singleTaskModalDescriptions">
                        <div className="singleTaskModalFilledDescription">
                            <span>Name</span>
                        </div>
                        <div className="singleTaskModalFilledDescription">
                            <span>Description</span>
                        </div>
                        <span>Space</span>
                        <span>Device</span>
                        <span>Creation date</span>
                        <span>Deadline</span>
                        <span>Is done</span>
                        <span>Days left</span>
                    </div>
                    {userTasks}
                </div>
            </>
        )
    }

    const profilerContent = () => {
        return (
            <div>
                {isModal ? <PropsContentModal content={isInviteSent ? modalContentInviteSent() : modalContent()}
                                              onClose={() => setIsModal(false)}/> : null}
                {isTaskModal ? <PropsContentModal content={isAddingTask ? taskModalContentAddTask() : taskModalContentViewTasks()}
                                              onClose={() => setIsTaskModal(false)}/> : null}
                {isAlert ? (
                    <Alert onClose={() => setIsAlert(false)} severity={alertSeverity} variant="filled">{alertText}</Alert>
                ) : null}
                <br/>
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
