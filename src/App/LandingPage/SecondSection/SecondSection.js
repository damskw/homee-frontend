import './SecondSection.css'
import SingleCard from "./SingleCard/SingleCard";
import arrowTime from '../../../assets/icons/arrow_time.png'
import bell from '../../../assets/icons/bell.png'
import cloud from '../../../assets/icons/cloud.png'
import group from '../../../assets/icons/group.png'

const SecondSection = props => {

    return (
        <div className="secondSection">
            <div className="gridContainer">
                <SingleCard image={arrowTime} header="Assign tasks" text="Choose a person which should do the task and we will send her an e-mail or notification, it does not need to be a user of Homee!"/>
                <SingleCard image={cloud} header="Add data you want" text="Store PDFs, Docs and scans* and we will make it searchable for you. Add your notes, images and links as well."/>
                <SingleCard image={bell} header="Set reminders" text="Whether there is a bill to pay or you often forget to buy dishwasher tablets, get reminded of it conveniently. We do in-app notifications, e-mails and we plan for more integrations!"/>
                <SingleCard image={group} header="Share devices data" text="Share devices’ data with your roommates, family or technician. Create convenient spaces to share multiple devices with any number of people."/>
                <SingleCard image={arrowTime} header="Assign tasks" text="Choose a person which should do the task and we will send her an e-mail or notification, it does not need to be a user of Homee!"/>
                <SingleCard image={cloud} header="Add data you want" text="Store PDFs, Docs and scans* and we will make it searchable for you. Add your notes, images and links as well."/>
                <SingleCard image={bell} header="Set reminders" text="Whether there is a bill to pay or you often forget to buy dishwasher tablets, get reminded of it conveniently. We do in-app notifications, e-mails and we plan for more integrations!"/>
                <SingleCard image={group} header="Share devices data" text="Share devices’ data with your roommates, family or technician. Create convenient spaces to share multiple devices with any number of people."/>
            </div>
        </div>

    )
}


export default SecondSection;
