import './SingleActivity.css'


const SingleActivity = props => {


    const iconSize = {
        width: "2.5em",
        height: "2.5em",
        background: props.background,
        marginLeft: "-0.5em"
    }

    return (
        <div className="singleActivity">
            <div className="muiBoxIcon" style={iconSize}>
                <i className={props.iconClass}></i>
            </div>
            <div className="singleActivityInfoSection">
                <div className="singleActivityInfoSectionHeader">
                    <span className="deviceName">{props.deviceName}</span>
                    <span>{props.description}</span>
                </div>
                <div className="singleActivityInfoSectionDate">
                    {props.date}
                </div>

            </div>
        </div>
    )
}


export default SingleActivity;
