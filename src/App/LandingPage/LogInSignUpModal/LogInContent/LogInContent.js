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
        console.log(user)
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
                       onChange={(e) => setActivationCode(e.target.value)} type="text" name="activationCode" placeholder="Activation code"></input>
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

    const contentClasses = `logInContent ${isLoading ? "hidden" : ""}`;

    return (
        <div>
            {isLoading ? <Spinner/> : null}
            <div className={contentClasses}>
                {isError ? <ErrorModal text="Incorrect data."/> : null}
                {isActivated ? <h2>Log in as existing user</h2> : <h2>Enter activation code</h2>}
                {isActivated ? loginForm() : activateForm()}
            </div>
        </div>
    )
}


export default LogInContent;
