import './DetailedDevice.css';
import React from 'react';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {dataHandler} from "../../../../../../Api/dataHandler";
import deviceAvatar from '../../../../../../../assets/dashboard/device_avatar.jpg'
import deviceNotAvailable from '../../../../../../../assets/dashboard/device_not_available_image.jpg'
import SingleActivity from "../../../MainPanel/MainPanelSecondSection/SingleActivity/SingleActivity";
import DashboardContentButton from "../../../../../Buttons/DashboardContentButton/DashboardContentButton";
import ChangeSpaceForm from "./ChangeSpaceForm/ChangeSpaceForm";
import ProfilerHeader from "../../../Profiler/ProfilerHeader/ProfilerHeader";
import Profiler from "../../../Profiler/Profiler";
import ProfilerThreeColumns from "../../../Profiler/ProfilerThreeColumns/ProfilerThreeColumns";
import ProfilerFullWide from "../../../Profiler/ProfilerFullWide/ProfilerFullWide";
import SingleDocument from "./SingleDocument/SingleDocument";
import HorizontalProfilerHr from "../../../../../Hrs/HorizontalProfilerHr";
import SingleNote from "./SingleNote/SingleNote";
import UploadDocumentForm from "../DisplayDevices/UploadDocumentForm/UploadDocumentForm";
import PropsContentModal from "../../../../../Modals/PropsContentModal";
import UpdateDeviceImageForm from "../UpdateDeviceImageForm/UpdateDeviceImageForm";
import AddEventForm from "./AddEventForm/AddEventForm";

const DetailedDevice = (props) => {
    const blueBackground = "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"
    const {deviceId} = useParams();
    const [device, setDevice] = useState(null);
    const [activities, setActivities] = useState([]);
    const [documents, setDocuments] = useState([]);
    const [notesList, setNotesList] = useState([]);
    const [spaceChange, setSpaceChange] = useState(false);
    const [isUpload, setIsUpload] = useState(false);
    const [isImageChange, setIsImageChange] = useState(false);
    const [isEvent, setIsEvent] = useState(false);
    const navigate = useNavigate();
    const activitiesList = activities
        .slice(0, 5)
        .map((a) => {
            if (a.activityType === "INFORMATION") {
                return (
                    <React.Fragment key={a.id}>
                        <SingleActivity date={a.date} background={blueBackground} description={a.description}
                                        deviceName={a.deviceName}/>
                        <br/>
                        <br/>
                    </React.Fragment>
                );
            }
            return null;
        });

    const documentsList = documents.map((d) => {
        return (
            <SingleDocument key={d.id} d={d}/>
        )
    })

    useEffect(() => {
        if (!deviceId) {
            navigate('/dashboard/devices');
        }

        async function fetchDevice() {
            const device = await dataHandler.getSingleDevice(deviceId);
            device ? setDevice(device) : navigate('/dashboard/devices');
        }

        async function fetchActivities() {
            const activities = await dataHandler.getActivitiesForSingleDevice(deviceId);
            setActivities(activities);
        }

        async function fetchDocuments() {
            const documents = await dataHandler.getDocumentsForDevice(deviceId);
            setDocuments(documents);
        }


        async function fetchNotes() {
            const notes = await dataHandler.getNotesForDevice(deviceId);
            const notesList = notes.map((n) => {
                return (
                    <SingleNote onDelete={onNoteDelete} key={n.id} n={n} />
                )
            });
            setNotesList(notesList);
        }

        const onNoteDelete =  (noteId) => {
            setNotesList(notesList.filter((note => note.props.n.id !== noteId)));
        };

        fetchDevice();
        fetchActivities();
        fetchDocuments();
        fetchNotes();
    }, [deviceId, navigate, notesList]);

    const onChangeSpaceClick = async () => {
        spaceChange ? setSpaceChange(false) : setSpaceChange(true);
    };

    const onDocumentUploadContent = () => {
        return (
            <>
                <UploadDocumentForm d={device} />
            </>
        )
    }

    const onImageChangeContent = () => {
        return (
            <>
                <UpdateDeviceImageForm d={device} />
            </>
        )
    }

    const onAddEventContent = () => {
        return (
            <>
                <AddEventForm d={device} />
            </>
        )
    }

    const profilerContent = () => {
        return (
            <div>
                <ProfilerHeader profilerImage={device && deviceAvatar} name={device && device.name}
                                nameUnder="Your device" buttonsContent={profilerContentButtons()}/>
                <ProfilerThreeColumns
                    firstColumnName="Device's Image" firstColumnContent={firstColumnContent()}
                    secondColumnName="Device's Information" secondColumnContent={secondColumnContent()}
                    thirdColumnName="Recent activities" thirdColumnContent={thirdColumnContent()}
                />
                <ProfilerFullWide content={profilerWideSectionContent()}/>
                <ProfilerFullWide content={profilerNotesContent()}/>
                {isUpload ? <PropsContentModal onClose={() => setIsUpload(false)} content={onDocumentUploadContent()}/> : null}
                {isImageChange ? <PropsContentModal onClose={() => setIsImageChange(false)} content={onImageChangeContent()}/> : null}
                {isEvent ? <PropsContentModal onClose={() => setIsEvent(false)} content={onAddEventContent()}/> : null}
            </div>
        )
    }

    const firstColumnContent = () => {
        return (
            <div className="deviceImageSection">
                {device && device.imageName ?
                    <img className="deviceProfileImage" src={dataHandler.getDeviceImageUrl(device.imageName)}
                         alt="devImg"></img>
                    : <img className="deviceProfileImage" src={deviceNotAvailable} alt="defImg"></img>}
            </div>
        )
    }

    const secondColumnContent = () => {
        return (
            <div className="deviceDescriptionDetails">
                <p>{device && device.about}</p>
                <HorizontalProfilerHr/>
                <div>
                    <span className="deviceInfoLabel">Model: </span> <span
                    className="deviceInfoDetails">{device && device.model}</span>
                    <br/>
                </div>
                <div>
                    <span className="deviceInfoLabel">Device Type: </span> <span
                    className="deviceInfoDetails">{device && device.deviceType}</span>
                    <br/>
                </div>
                <div>
                    <span className="deviceInfoLabel">Location: </span> <span
                    className="deviceInfoDetails">{device && device.spot}</span>
                    <br/>
                </div>
                <div>
                    <span className="deviceInfoLabel">Purchase date: </span> <span
                    className="deviceInfoDetails">{device && device.purchaseDate}</span>
                    <br/>
                </div>
                <div>
                    <span className="deviceInfoLabel">Purchase price: </span> <span
                    className="deviceInfoDetails">{device && device.purchasePrice}</span>
                    <br/>
                </div>
                <div>
                    <span className="deviceInfoLabel">Warranty start: </span> <span
                    className="deviceInfoDetails">{device && device.warrantyStart}</span>
                    <br/>
                </div>
                <div>
                    <span className="deviceInfoLabel">Warranty end: </span> <span
                    className="deviceInfoDetails">{device && device.warrantyEnd}</span>
                    <br/>
                </div>
                <div>
                    <span className="deviceInfoLabel">Last updated at: </span> <span
                    className="deviceInfoDetails">{device && device.updatedAt}</span>
                    <br/>
                </div>
                <div>
                    <span className="deviceInfoLabel">Added on: </span> <span
                    className="deviceInfoDetails">{device && device.createdAt}</span>
                    <br/>
                </div>
            </div>
        )
    }

    const thirdColumnContent = () => {
        return (
            <div className="deviceActivities">
                {activitiesList}
                <div className="viewAllButton">
                    <DashboardContentButton text="View all"/>
                </div>
            </div>
        )
    }

    const profilerWideSectionContent = () => {
        return (
            <div className="documentListHeader">
                <HorizontalProfilerHr/>
                <h4 className="h4noBottom">Documents</h4>
                <span>Documents associated with this device</span>
                <div className="documentsList">
                    {documentsList}
                </div>
            </div>
        )
    }


    const onNoteDelete =  (noteId) => {
        setNotesList(notesList.filter((note => note.props.n.id !== noteId)));
    };

    const onEmptyNoteClick = async () => {
        const note = {
            deviceId: deviceId,
            title: "",
            description: ""
        }
        const addedNote = await dataHandler.createNewDeviceNote(note);
        setNotesList([...notesList, <SingleNote onDelete={onNoteDelete} key={addedNote.id} n={addedNote}/>]);
    }

    const profilerNotesContent = () => {

        return (
            <div className="notesListHeader">
                <HorizontalProfilerHr/>
                <h4 className="h4noBottom">Notes</h4>
                <span>Notes created for that device</span>
                <div className="notesList">
                    <SingleNote onEmptyClick={onEmptyNoteClick}/>
                    {notesList}
                </div>
            </div>
        )
    }

    const unUploadDocumentClick = () => {
        setIsUpload(true);
    };

    const onChangeImageClick = () => {
        setIsImageChange(true);
    }

    const onEventClick = () => {
        setIsEvent(true);
    }

    const profilerContentButtons = () => {
        return (
            <div className="detailedDeviceHeaderButtons">
                <DashboardContentButton action={onChangeSpaceClick} text={spaceChange ? "Cancel" : "Change space"}/>
                {spaceChange && <ChangeSpaceForm device={device}/>}
                <DashboardContentButton action={unUploadDocumentClick} text={"Upload document"}/>
                <DashboardContentButton action={onChangeImageClick} text={"Change image"}/>
                <DashboardContentButton action={onEventClick} text={"Add event"}/>
            </div>
        )
    }

    return (
        <Profiler content={profilerContent()}/>
    );
};

export default DetailedDevice;