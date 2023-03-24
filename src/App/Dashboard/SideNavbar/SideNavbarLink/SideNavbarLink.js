import './SideNavbarLink.css'

const SideNavbarLink = props => {

    return (
        <div className="sideNavbarLink" onClick={props.action}>
            <img src={props.image} alt="imageLink"></img>
            <p>{props.text}</p>
        </div>
    )
}


export default SideNavbarLink;
