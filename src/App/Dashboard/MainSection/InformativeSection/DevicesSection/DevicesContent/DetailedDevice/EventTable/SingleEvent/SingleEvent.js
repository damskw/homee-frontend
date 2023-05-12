import './SingleEvent.css'
import React from "react";


const SingleEvent = props => {

    return (
        <tr key={props.e.id}>
            <td>{props.e.name}</td>
            <td>{props.e.notification === true ? "Yes" : "No"}</td>
            <td>{props.e.notification === true ? props.e.notificationTime : "N/A"}</td>
            <td>{props.e.scheduledAt}</td>
            <td><i onClick={props.onClick} id="deleteSpaceIcon" className="fa-regular fa-circle-xmark"></i></td>
        </tr>
    )
}


export default SingleEvent;
