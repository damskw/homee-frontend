import './SignUpContent.css'
import {dataHandler} from "../../../Api/dataHandler";
import {useState} from "react";
import Spinner from "../../../Spinners/Spinner";
import { useNavigate } from 'react-router-dom';
import ErrorModal from "../ErrorModal/ErrorModal";
import {authenticate} from "../../../Authenticate/authenticate";

const SignUpContent = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [userData, setUserData] = useState(null);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = Object.fromEntries(new FormData(e.target).entries());
        delete data.repeatPassword;
        const user = await dataHandler.createNewUser(data);
        data.id = user.id;
        setUserData(data);
        setIsLoading(false);
        if (!user) {
            setIsError(true);
            return;
        }
        setIsRegistered(true);
    }

    async function loginUser() {
        const loginUserData = {
            username: userData.email,
            password: userData.password,
        }
        const loggedUser = await dataHandler.loginUser(loginUserData);
        authenticate.loginUser(loggedUser.id, loggedUser.username, loggedUser.token);
        navigate('/dashboard');
    }

    const contentClasses = `signUpContent ${isLoading ? "hidden" : ""}`;

    const signUpForm = () => {
        return (
            <form className="loginForm" onSubmit={onSubmitClick}>
                <input type="text" name="username" placeholder="Username"></input>
                <input type="text" name="firstName" placeholder="First name"></input>
                <input type="text" name="lastName" placeholder="Last name"></input>
                <input type="text" name="about" placeholder="About"></input>
                <input type="email" name="email" placeholder="Email"></input>
                <input type="password" name="password" placeholder="Password"></input>
                <input type="password" name="repeatPassword" placeholder="Repeat password"></input>
                <button className="submitButton" type="submit">Submit</button>
            </form>
        )
    }

    async function onActivationClick(e) {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        const response = await dataHandler.activateUserAccount(userData.id, data.activationCode)
        if (!response) {
            setIsError(true);
            return;
        }
        await loginUser();
    }

    const activateForm = () => {
        return (
            <form className="loginForm" onSubmit={onActivationClick}>
                <input defaultValue="" type="text" name="activationCode" placeholder="Activation code"></input>
                <button className="submitButton" type="submit">Submit</button>
            </form>
        )
    }

    const activationContent = () => {
        return (
            <>
                <h2>Activation code has been sent to your email</h2>
                {activateForm()}
            </>
        )
    }

    const registerContent = () => {
        return (
            <>
                <h2>Sign Up as new user</h2>
                {signUpForm()}
                <br/>
                <span className="clickable" onClick={props.onSpan}>Already have an account? Log in here.</span>
            </>
        )
    }

    return (
        <div>
            {isLoading ? <Spinner/> : null}
            <div className={contentClasses}>
                {isError ? <ErrorModal text="Incorrect data."/> : null}
                {isRegistered ? activationContent() : registerContent()}
            </div>
        </div>
    )
}


export default SignUpContent;
