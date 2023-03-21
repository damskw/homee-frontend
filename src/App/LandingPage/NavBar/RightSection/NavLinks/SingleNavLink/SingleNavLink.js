import React from "react";

const SingleNavLink = props => {

    return (
        <li><a href={props.href}>{props.text}</a></li>
    )
}


export default SingleNavLink;
