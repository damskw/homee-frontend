import './ProfileSection.css'
import InformativeSectionWrapper from "../InformativeSectionWrapper/InformativeSectionWrapper";
import topImage from '../../../../../assets/dashboard/landscape_background.jpg'
import ProfileContent from "./ProfileContent/ProfileContent";

const ProfileSection = props => {

    return (
        <InformativeSectionWrapper topImage={topImage} content={<ProfileContent/>}/>
    )
}


export default ProfileSection;
