import './DevicesSection.css'
import InformativeSectionWrapper from "../InformativeSectionWrapper/InformativeSectionWrapper";
import topImage from '../../../../../assets/dashboard/devices_background.jpg'
import DevicesContent from "./DevicesContent/DevicesContent";


const DevicesSection = props => {


    return (
        <InformativeSectionWrapper content={<DevicesContent/>} topImage={topImage} onImageText=""/>
    )
}


export default DevicesSection;
