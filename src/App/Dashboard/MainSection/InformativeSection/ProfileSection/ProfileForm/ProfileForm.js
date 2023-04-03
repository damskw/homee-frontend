import './ProfileForm.css'
import DashboardContentButton from "../../../../Buttons/DashboardContentButton/DashboardContentButton";
import {dataHandler} from "../../../../../Api/dataHandler";
import {useState} from "react";

const ProfileForm = props => {

    const [isError, setIsError] = useState(false);

    async function onEditProfileSubmitAction(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        data.id = props.user.id;
        await dataHandler.updateUser(data);
        window.location.reload();
    }

    async function onChangePasswordSubmitAction(e) {
        setIsError(false);
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        data.id = props.user.id;
        delete data.confirmNewPassword;
        const userDb = await dataHandler.changeUserPassword(data);
        userDb ? window.location.reload() : setIsError(true);
    }

    function loadEditProfile() {
        return (
            <form className="profileForm" onSubmit={onEditProfileSubmitAction}>
                <div className="profileFormEntry">
                    <label htmlFor="username">Username:</label>
                    <input type="text" defaultValue={props.user?.username} name="username"></input>
                </div>
                <div className="profileFormEntry">
                    <label htmlFor="firstName">First name:</label>
                    <input type="text" defaultValue={props.user?.firstName} name="firstName"></input>
                </div>
                <div className="profileFormEntry">
                    <label htmlFor="lastName">Last name:</label>
                    <input type="text" defaultValue={props.user?.lastName} name="lastName"></input>
                </div>
                <div className="profileFormEntry">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" defaultValue={props.user?.email} name="email"></input>
                </div>
                <div className="profileFormEntry">
                    <label htmlFor="about">About me:</label>
                    <textarea rows="10" cols="50" defaultValue={props.user?.about} name="about"></textarea>
                </div>
                <DashboardContentButton text="Submit"/>
            </form>
        )
    }

    function loadChangePassword() {
        return (
            <form className="profileForm" onSubmit={onChangePasswordSubmitAction}>
                {isError ? <h4 className="profileFormError">Wrong data!</h4> : null}
                <div className="profileFormEntry">
                    <label htmlFor="oldPassword">Old password:</label>
                    <input required type="password" name="oldPassword"></input>
                </div>
                <div className="profileFormEntry">
                    <label htmlFor="newPassword">New password:</label>
                    <input required type="password" name="newPassword"></input>
                </div>
                <div className="profileFormEntry">
                    <label htmlFor="confirmNewPassword">Confirm new password:</label>
                    <input required type="password" name="confirmNewPassword"></input>
                </div>
                <DashboardContentButton text="Submit"/>
            </form>
        )
    }

    return (
        <div className="profileFormWrapper">
            {props.isPassword ? loadChangePassword() : loadEditProfile()}
        </div>
    )
}


export default ProfileForm;
