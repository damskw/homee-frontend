import './HeaderRightSection.css'
import HeaderSearchBar from "./HeaderSearchBar/HeaderSearchBar";
import bellIcon from '../../../../../assets/icons/bell.png'

const HeaderRightSection = props => {


    return (
        <div className="headerRightSection">
            <HeaderSearchBar/>
            <img src={props.profileImage} alt="noImage"/>
            <img src={bellIcon} alt="noImage"/>
        </div>
    )
}


export default HeaderRightSection;
