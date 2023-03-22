import React from "react";
import './SingleNavLink.css'

const SingleNavLink = props => {

    return (
        <li><a className="singleLink" onClick={props.action} href={props.href}>{props.text}</a></li>
    )
}


export default SingleNavLink;
