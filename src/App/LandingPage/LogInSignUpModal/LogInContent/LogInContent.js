import './LogInContent.css'
import {dataHandler} from "../../../Api/dataHandler";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import ErrorModal from "../ErrorModal/ErrorModal";
import Spinner from "../../../Spinners/Spinner";
import {authenticate} from "../../../Authenticate/authenticate";

const LogInContent = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [loggedUser, setLoggedUser] = useState(null);
    const [isActivated, setIsActivated] = useState(true);
    const [isChangingPassword, setIsChangingPassword] = useState(false);
    const [isSettingNewPassword, setIsSettingNewPassword] = useState(false);
    const [isChangePasswordFinal, setIsChangePasswordFinal] = useState(false);
    const [changingPasswordEmail, setChangingPasswordEmail] = useState('');
    const [activationCode, setActivationCode] = useState('');
    const navigate = useNavigate();

    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = Object.fromEntries(new FormData(e.target).entries());
        const user = await dataHandler.loginUser(data);
        setLoggedUser(user);
        setIsLoading(false);
        if (!user) {
            setIsError(true);
            return;
        }
        if (!user.isActivated) {
            setIsActivated(false);
            return;
        }
        loginUser(user);
    }

    function loginUser(user) {
        navigate('/dashboard');
        authenticate.loginUser(user.id, user.username, user.token);
    }

    async function onActivationClick(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        const response = await dataHandler.activateUserAccount(loggedUser.id, data.activationCode)
        if (!response) {
            setIsError(true);
            return;
        }
        loginUser(loggedUser);
    }

    const activateForm = () => {
        return (
            <form className="loginForm" onSubmit={onActivationClick}>
                <input value={isActivated ? '' : activationCode}
                       onChange={(e) => setActivationCode(e.target.value)} type="text" name="activationCode"
                       placeholder="Activation code"></input>
                <button className="submitButton" type="submit">Submit</button>
            </form>
        )
    }

    const loginForm = () => {
        return (
            <form className="loginForm" onSubmit={onSubmitClick}>
                <input type="text" name="username" placeholder="Username / email"></input>
                <input type="password" name="password" placeholder="Password"></input>
                <button className="loginButton" type="submit">Submit</button>
            </form>
        )
    }

    function requestCodeForPasswordChange(e) {
        e.preventDefault();
        dataHandler.requestPasswordChange(changingPasswordEmail);
        setIsSettingNewPassword(true);
    }


    const resetPasswordFirstForm = () => {
        return (
            <form className="loginForm" onSubmit={(e) => requestCodeForPasswordChange(e)}>
                <input onChange={(e) => setChangingPasswordEmail(e.target.value)} required name="emailPassword"
                       type="email" placeholder="Email"></input>
                <button className="submitButton" type="submit">Submit</button>
            </form>
        )
    }

    const handlePasswordFinalChange = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        delete data.repeatChangedPassword;
        data.email = changingPasswordEmail;
        const response = await dataHandler.changePasswordLostPassword(data);
        if (!response) {
            setIsError(true);
            return;
        }
        setIsChangePasswordFinal(true);
        setIsError(false);
    }

    const resetPasswordSecondForm = () => {
        return (
            <form className="loginForm" onSubmit={(e) => handlePasswordFinalChange(e)}>
                <input name="passwordCode" type="text" placeholder="Code"></input>
                <input required name="changedPassword" type="password" placeholder="Password"></input>
                <input required name="repeatChangedPassword" type="password" placeholder="Repeat password"></input>
                <button className="submitButton" type="submit">Submit</button>
            </form>
        )
    }

    const contentClasses = `logInContent ${isLoading ? "hidden" : ""}`;

    const handleRequestPasswordChange = () => {
        setIsChangingPassword(true);
    }

    const activationContent = () => {
        return (
            <>
                <h2>Enter activation code</h2>
                {activateForm()}
            </>
        )
    }

    const loginInternalContent = () => {
        return (
            <>
                <h2>Log in as existing user</h2>
                {loginForm()}
                <br/>
                <span className="clickable" onClick={props.onSpan}>Don't have an account? Sign up here.</span>
                <br/>
                <br/>
                <span className="clickable"
                      onClick={handleRequestPasswordChange}>Forgot your password? Reset it here.</span>
            </>
        )
    }

    const passwordChangeFirstStep = () => {
        return (
            <>
                <h2>Please enter e-mail for password change account.</h2>
                {resetPasswordFirstForm()}
            </>
        )
    }

    const passwordChangeSecondStepInternal = () => {
        return (
            <>
                <h3>Please enter code received via email and your new password.</h3>
                {resetPasswordSecondForm()}
            </>
        )
    }

    const handleGoBackToLogIn = () => {
        setIsChangingPassword(false);
        setIsSettingNewPassword(false);
        setIsChangePasswordFinal(false);
    }

    const passwordChangeFinalContent = () => {
        return (
            <>
                <h2>Your password has been reset properly, you may log in now.</h2>
                <h3 onClick={() => handleGoBackToLogIn()}>Click here to log in.</h3>
            </>
        )
    }

    const passwordChangeSecondStep = () => {
        return (
            <>
                {isChangePasswordFinal ? passwordChangeFinalContent() : passwordChangeSecondStepInternal()}
            </>
        )
    }

    const passwordChangeContent = () => {
        return (
            <>
                {isSettingNewPassword ? passwordChangeSecondStep() : passwordChangeFirstStep()}
            </>
        )
    }

    const loginContent = () => {
        return (
            <>
                {isChangingPassword ? passwordChangeContent() : loginInternalContent()}
            </>
        )
    }

    return (
        <div>
            {isLoading ? <Spinner/> : null}
            <div className={contentClasses}>
                {isError ? <ErrorModal text="Incorrect data."/> : null}
                {isActivated ? loginContent() : activationContent()}
            </div>
        </div>
    )
}


export default LogInContent;
