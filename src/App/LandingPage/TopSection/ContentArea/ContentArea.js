import './ContentArea.css'
import MainColorButton from "../../Buttons/MainColorButton/MainColorButton";
import CheckedIcon from "../../Icons/CheckedIcon";


const ContentArea = props => {

    return (
        <section>
            <div>
                <h2>The easiest way to manage your home devices.</h2>
            </div>
            <div>
                <p>Homee gives you opportunity to store and manage all your home devices
                    in real time. Keep your owner manuals, warranties and
                    essentials in a cloud.</p>
            </div>
            <div>
                <MainColorButton text="Learn more"/>
            </div>
            <div className="infoSection">
                <div className="singleIcon">
                    <CheckedIcon/>
                </div>
                <div className="singleInfo">
                    <p>3 minutes registration</p>
                </div>
                <div className="singleIcon">
                    <CheckedIcon/>
                </div>
                <div className="singleInfo">
                    <p>100% safe</p>
                </div>
            </div>
        </section>
    )
}


export default ContentArea;
