import './ProfilerThreeColumns.css'
import React from "react";


const ProfilerThreeColumns = props => {


    return (
        <div className="profilerThreeColumns">
            <div className="profilerFirstColumn">
                <h4>{props.firstColumnName}</h4>
                {props.firstColumnContent}
            </div>
            <hr className="verticalProfilerHr"></hr>
            <div className="profilerSecondColumn">
                <h4>{props.secondColumnName}</h4>
                {props.secondColumnContent}
            </div>
            <hr className="verticalProfilerHr"></hr>
            <div className="profilerThirdColumn">
                <h4>{props.thirdColumnName}</h4>
                {props.thirdColumnContent}
            </div>
        </div>
    )
}


export default ProfilerThreeColumns;
