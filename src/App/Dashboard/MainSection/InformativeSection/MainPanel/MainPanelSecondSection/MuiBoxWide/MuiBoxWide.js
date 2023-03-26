import './MuiBoxWide.css'


const MuiBoxWide = props => {

    const iconBackground = {
        background: props.iconColor
    }

    return (
        <div className="muiBoxWide">
            <div className="muiBoxWideWrapper">
                <div className="muiBoxWideWrapperInside">
                    <div className="muiBoxWideUpper">
                        <div className="muiBoxWideIcon" style={iconBackground}>
                            <h1>{props.title}</h1>
                        </div>
                    </div>
                    {/*<hr className="muiBoxWideHr"/>*/}
                    <div className="muiBoxWideBottom">
                        {props.content}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MuiBoxWide;
