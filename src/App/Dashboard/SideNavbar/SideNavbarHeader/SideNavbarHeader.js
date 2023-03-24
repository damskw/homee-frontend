import './SideNavbarHeader.css'

const SideNavbarHeader = props => {

    return (
        <nav className="sideNavbarHeader">
            <img className="sideNavbarHeaderImg" src={props.logo} alt="logo"></img>
        </nav>
    )
}


export default SideNavbarHeader;
