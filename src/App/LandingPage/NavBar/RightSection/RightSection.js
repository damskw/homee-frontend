import NavLinks from "./NavLinks/NavLinks";
import MainColorButton from "../../MainColorButton/MainColorButton";
import './RightSection.css'

const RightSection = props => {

    return (
        <div className="rightSection">
            <NavLinks/>
            <MainColorButton text="Sign Up"></MainColorButton>
        </div>
    )
}


export default RightSection;
