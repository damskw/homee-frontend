import './MuiBox.css'


const MuiBox = props => {

    const iconBackground = {
        background: props.iconColor
    }

    return (
        <div className="muiBox">
            <div className="muiBoxWrapper">
                <div className="muiBoxWrapperInside">
                    <div className="muiBoxUpper">
                        <div className="muiBoxIcon" style={iconBackground}>
                            <i className={props.iconClass}></i>
                        </div>
                        <div className="muiBoxText">
                            <span>{props.headerText}</span>
                            <h4>{props.valueText}</h4>
                        </div>
                    </div>
                    <hr className="muiBoxHr"/>
                    <div className="muiBoxBottom">
                        <p>{props.downInfoText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MuiBox;
