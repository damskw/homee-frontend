import './HeaderLeftSection.css'
import HeaderTopRouting from "./HeaderTopRouting/HeaderTopRouting";
import HeaderBottomRouting from "./HeaderBottomRouting/HeaderBottomRouting";

const HeaderLeftSection = props => {


    return (
        <div className="headerLeftSection">
            <HeaderTopRouting/>
            <HeaderBottomRouting/>
        </div>
    )
}


export default HeaderLeftSection;
