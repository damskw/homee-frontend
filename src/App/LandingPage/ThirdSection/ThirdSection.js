import './ThirdSection.css'
import screenshot from '../../../assets/thirdsection/two_screenshots.png'
const ThirdSection = props => {

    return (
        <div className="thirdSection">
            <div className="dashboardScreenshot">
                <img src={screenshot} alt="error"></img>
            </div>
            <div className="infos">
                <h1 className="header">User friendly interface</h1>
                <p className="information">Allows you to easily browse through all your devices and activities.</p>
            </div>
        </div>

    )
}


export default ThirdSection;
