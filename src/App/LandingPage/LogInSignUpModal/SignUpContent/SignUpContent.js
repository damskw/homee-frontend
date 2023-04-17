import './SignUpContent.css'
import {dataHandler} from "../../../Api/dataHandler";
import {useState} from "react";
import Spinner from "../../../Spinners/Spinner";
import { useNavigate } from 'react-router-dom';
import ErrorModal from "../ErrorModal/ErrorModal";
import {authenticate} from "../../../Authenticate/authenticate";

const SignUpContent = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    async function onSubmitClick(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = Object.fromEntries(new FormData(e.target).entries());
        delete data.repeatPassword;
        const user = await dataHandler.createNewUser(data);
        setIsLoading(false);
        if (!user) {
            setIsError(true);
            return;
        }
        navigate('/dashboard');
        authenticate.loginUser(user.id, user.token);
    }

    const contentClasses = `signUpContent ${isLoading ? "hidden" : ""}`;

    return (
        <div>
            {isLoading ? <Spinner/> : null}
            <div className={contentClasses}>
                {isError ? <ErrorModal text="Incorrect data."/> : null}
                <h2>Sign Up as new user</h2>
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
            </div>
        </div>
    )
}


export default SignUpContent;
