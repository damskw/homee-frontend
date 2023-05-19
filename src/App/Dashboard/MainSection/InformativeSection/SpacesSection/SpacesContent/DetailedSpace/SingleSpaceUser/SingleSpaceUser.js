import './SingleSpaceUser.css'


const SingleSpaceUser = props => {

    return (
        <div className="singleSpaceUser">
            {props.user.username}
            <div className="singleSpaceUserSideIcons">
                <i className="fa-solid fa-plus" onClick={props.onPlusClick}></i>
                <i className="fa-solid fa-list-check" onClick={props.onTaskListClick}></i>
                <i className="fa-solid fa-trash" onClick={props.onDeleteClick}></i>
            </div>
        </div>
    )
}


export default SingleSpaceUser;
