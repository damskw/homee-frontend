import './ProfileContent.css'
import Profiler from "../../Profiler/Profiler";
import ProfilerHeader from "../../Profiler/ProfilerHeader/ProfilerHeader";
import ProfilerThreeColumns from "../../Profiler/ProfilerThreeColumns/ProfilerThreeColumns";
import {useEffect, useState} from "react";
import {authenticate} from "../../../../../Authenticate/authenticate";
import userDefaultAvatar from '../../../../../../assets/dashboard/user_default.png'
import {dataHandler} from "../../../../../Api/dataHandler";
import DashboardContentButton from "../../../../Buttons/DashboardContentButton/DashboardContentButton";
import ProfileForm from "../ProfileForm/ProfileForm";

const ProfileContent = props => {

    const [user, setUser] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [isPassword, setIsPassword] = useState(false);

    useEffect(() => {
        const userId = authenticate.getUser().id;

        async function fetchUser() {
            const user = await dataHandler.getSingleUser(userId);
            delete user.password;
            setUser(user);
        }

        fetchUser();
    }, [])

    function handleEditForm() {
        isPassword ? setIsPassword(false) : setIsPassword(false);
        isEditing ? setIsEditing(false) : setIsEditing(true);
    }

    function handleChangePassword() {
        isPassword ? setIsPassword(false) : setIsPassword(true);
        isEditing ? setIsEditing(false) : setIsEditing(false);
    }

    const profilerContent = () => {
        return (
            <div>
                <ProfilerHeader profilerImage={userDefaultAvatar} name={user && user.username}
                                nameUnder="Your profile" buttonsContent={buttonsContent()}/>
                {isEditing || isPassword ? <ProfileForm isPassword={isPassword} user={user}/> :
                    <ProfilerThreeColumns
                        firstColumnName="Test"
                        secondColumnName="Profile Information" secondColumnContent={secondColumnContent()}
                        thirdColumnName="Test"/>
                }
            </div>
        )
    }

    const buttonsContent = () => {
        return (
            <div className="buttonsProfileHeader">
                <DashboardContentButton action={handleEditForm} text={isEditing ? "Cancel" : "Edit profile"}/>
                <DashboardContentButton action={handleChangePassword} text={isPassword ? "Cancel" : "Change password"}/>
            </div>
        )
    }

    const secondColumnContent = () => {
        return (
            <div className="profileDescriptionDetails">
                {user && user.about}
                <hr className="horizontalProfilerHr"></hr>
                <div>
                    <span className="profileInfoLabel">Username:</span><span className="profileInfoDetails>">
                    {user && user.username}</span>
                    <br/>
                </div>
                <div>
                    <span className="profileInfoLabel">Name:</span><span className="profileInfoDetails>">
                    {user && user.firstName + " " + user.lastName}</span>
                    <br/>
                </div>
                <div>
                    <span className="profileInfoLabel">E-mail:</span><span className="profileInfoDetails>">
                    {user && user.email}</span>
                    <br/>
                </div>
            </div>
        )
    }

    return (
        <Profiler content={profilerContent()}/>
    )
}


export default ProfileContent;
