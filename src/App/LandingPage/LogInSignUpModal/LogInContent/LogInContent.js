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
    const navigate = useNavigate();

    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = Object.fromEntries(new FormData(e.target).entries());
        const user = await dataHandler.loginUser(data);
        setIsLoading(false);
        if (!user) {
            setIsError(true);
            return;
        }
        navigate('/dashboard');
        authenticate.loginUser(user.id, user.username);
    }

    const contentClasses = `logInContent ${isLoading ? "hidden" : ""}`;

    return (
        <div>
            {isLoading ? <Spinner/> : null}
            <div className={contentClasses}>
                {isError ? <ErrorModal text="Incorrect data."/> : null}
                <h2>Log in as existing user</h2>
                <form className="loginForm" onSubmit={onSubmitClick}>
                    <input type="text" name="username" placeholder="Username / email"></input>
                    <input type="password" name="password" placeholder="Password"></input>
                    <button className="loginButton" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}


export default LogInContent;
