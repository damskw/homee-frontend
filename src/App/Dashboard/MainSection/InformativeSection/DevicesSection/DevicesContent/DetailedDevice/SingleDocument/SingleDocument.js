import './SingleDocument.css'
import React, {useState} from "react";
import {dataHandler} from "../../../../../../../Api/dataHandler";
import SmallDownloadButton from "../../../../../../Buttons/SmallDownloadButton/SmallDownloadButton";
import PropsContentModal from "../../../../../../Modals/PropsContentModal";


const SingleDocument = props => {

    const [isModal, setIsModal] = useState(false);

    const onDownloadClick = async (documentId) => {
        await dataHandler.downloadDocument(documentId);
    }

    const onDeleteClick = () => {
        setIsModal(true);
    }

    const onDeleteConfirmAction = async () => {
        await dataHandler.deleteDocument(props.d.id);
        window.location.reload();
    }

    const modalContent = () => {
        return (
            <div>
                <h3>Are you sure you want to delete document {props.d.name}?</h3>
                <div className="singleDocumentModalYesNo">
                    <SmallDownloadButton action={onDeleteConfirmAction} class='buttonGreen' text="Yes"/>
                    <SmallDownloadButton action={() => setIsModal(false)} class='buttonRed' text="No"/>
                </div>
            </div>
        )
    }

    return (
        <div className="singleDocument">
            {isModal ? <PropsContentModal content={modalContent()} onClose={() => setIsModal(false)}/> : null}
            <div>
                <h4 className="h4noBottom">{props.d.name}</h4>
                <span>Document's name</span>
            </div>
            <div className='singleDocumentButtons'>
                <SmallDownloadButton action={() => onDownloadClick(props.d.id)} text="Download"/>
                <SmallDownloadButton action={onDeleteClick} class='buttonRed' text="Delete"/>
            </div>
        </div>
    )
}


export default SingleDocument;
