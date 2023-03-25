import './SpacesSection.css'
import InformativeSectionWrapper from "../InformativeSectionWrapper/InformativeSectionWrapper";
import topImage from '../../../../../assets/dashboard/user_spaces.jpg'
import SpacesContent from "./SpacesContent/SpacesContent";

const SpacesSection = props => {


    return (
        <InformativeSectionWrapper content={<SpacesContent/>} topImage={topImage} onImageText=""/>
    )
}


export default SpacesSection;
