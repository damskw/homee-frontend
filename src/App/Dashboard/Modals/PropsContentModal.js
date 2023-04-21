import './PropsContentModal.css'
import React from "react";

const PropsContentModal = props => {


    return (
        <div className="modal">
            <div className="modal-content">
                <span onClick={props.onClose} className="close">&times;</span>
                {props.content}
            </div>
        </div>
    )
}


export default PropsContentModal;
