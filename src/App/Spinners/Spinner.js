import './Spinner.css'

const Spinner = props => {

    return (
        <div className="spinnerWrapper">
            <div className="spinner-position">
                <div className="spinner">
                    <div className="dot1"></div>
                    <div className="dot2"></div>
                    <div className="dot3"></div>
                </div>
            </div>
        </div>
    )
}


export default Spinner;
