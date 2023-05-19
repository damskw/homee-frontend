import './ThirdSection.css'
import screenshot from '../../../assets/thirdsection/dashboard-layout.png'
const ThirdSection = props => {

    return (
        <div className="thirdSection">
            <div className="dashboardScreenshot">
                <img className="blurred" src={screenshot} alt="error"></img>
                <div className="imageBehind">
                    <img src={screenshot} alt="error"></img>
                </div>
            </div>
            <div className="infos">
                <h1 className="header">User friendly interface</h1>
                <p className="information">Allows you to easily browse through all your devices and activities.</p>
            </div>
        </div>

    )
}


export default ThirdSection;
