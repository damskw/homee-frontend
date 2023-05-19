import './SingleTaskModal.css'


const SingleTaskModal = props => {

    const task = props.task;

    return (
        <div className="singleTaskModal">
            <div className="singleTaskModalFilled">
                <div className="singleTaskModalFilledDescription">
                    <span>{task.name}</span>
                </div>
                <div className="singleTaskModalFilledDescription">
                    <span>{task.description}</span>
                </div>
                <span>{task.spaceName}</span>
                <span>{task.deviceName}</span>
                <span>{task.creationDate}</span>
                <span>{task.deadline}</span>
                <span>{task.isDone ? "Yes" : "No"}</span>
                <span>{task.daysLeft >= 0 ? task.daysLeft : "N/A"}</span>
            </div>
        </div>
    )
}


export default SingleTaskModal;
