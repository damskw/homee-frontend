import './DashboardContentButton.css'

const DashboardContentButton = props => {



    return (
        <button onClick={props.action} className="dashboardContentButton">{props.text}</button>
    )
}


export default DashboardContentButton;
