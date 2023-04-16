import './ProfilerHeader.css'
import React from "react";


const ProfilerHeader = props => {


    return (
        <div className="profilerHeader">
            <div className="profilerHeaderWrapper">
                <div className="profilerAvatarWrapper">
                    <img src={props.profilerImage} className="profilerAvatar" alt="profilerAvatar"></img>
                </div>
                <div className="profilerHeaderInfo">
                    {<h3>{props.name}</h3>}
                    <p>{props.nameUnder}</p>
                </div>
            </div>
            <div className="profilerHeaderButtons">
                {props.buttonsContent}
            </div>
        </div>
    )
}


export default ProfilerHeader;
