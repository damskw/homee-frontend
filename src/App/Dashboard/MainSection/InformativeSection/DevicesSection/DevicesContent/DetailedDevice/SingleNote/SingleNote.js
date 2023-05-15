import './SingleNote.css'
import SmallDownloadButton from "../../../../../../Buttons/SmallDownloadButton/SmallDownloadButton";
import React from "react";
import {useState} from "react";
import {dataHandler} from "../../../../../../../Api/dataHandler";


const SingleNote = props => {

    const [isEditing, setIsEditing] = useState(false);

    const emptyNote = () => {
        return (
            <div onClick={props.onEmptyClick} className="emptyNoteWrapper">
                <div className="addNewNoteSection">
                    <div className="addNewNoteIconWrapper">
                        <i className="fa-light fa-plus"></i>
                    </div>
                    <h4>Add new note</h4>
                </div>
            </div>
        )
    }

    const contentNote = () => {

        const handleNoteSubmit = async (e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.target).entries());
            data.id = props.n.id;
            await dataHandler.updateDeviceNote(data);
            setIsEditing(false);
        }

        const handleNoteDelete = async() => {
            props.onDelete(props.n.id);
            await dataHandler.deleteNote(props.n.id);
        }

        return (
            <div className="singleNoteWrapper">
                <form onSubmit={(e) => handleNoteSubmit(e)} className="noteForm">
                    <input onFocus={() => setIsEditing(true)} name="title" className="noteTitle" type="text"
                           placeholder="Note title" defaultValue={props.n.title}></input>
                    <textarea onFocus={() => setIsEditing(true)} name="description" className="noteDescription" type="text"
                           placeholder="Note description" defaultValue={props.n.description}></textarea>
                    {isEditing ? (
                        <div className="noteSaveCancelButtons">
                            <SmallDownloadButton action={() => setIsEditing(false)} class='buttonGrey' text="Cancel"/>
                            <SmallDownloadButton class='buttonGrey' text="Save"/>
                        </div>
                    ) : null}

                </form>
                <hr className="hrNote"/>
                <div className="noteBottom">
                    <h5 className="headerGrey">{props.n.creationTime}</h5>
                    {isEditing ? <i onClick={handleNoteDelete} id="deleteSpaceIcon" className="fa-regular fa-circle-xmark"></i> : null}
                </div>
            </div>
        )
    }

    return (
        <div>
            {props.n ? contentNote() : emptyNote()}
        </div>
    )
}


export default SingleNote;
