import { useState } from "react";
import showTooltip from "../tooltip";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    /**
     * Processes the information given by the user for logging in.
     */
    const processSubmission = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        /* The login details have to be checked against local storage. */
        if (!users.find(u => u.username === username)) {
            showTooltip("It seems you are not a Member. Check your username again or consider signing up.", "red");
            return;
        }
        if (!users.find(u => u.password === password)) {
            showTooltip("It seems your password is incorrect. Please try again.", "red");
            return;
        }

        navigate("/redirect");
    }

    return (
        <>
            <h2>Member Login</h2>
            <form onSubmit={processSubmission} className="form-box">
                <div className="fields" title="Enter your username here.">
                    <img src="src/assets/username-icon.svg" alt="Username Icon" className="icons" />
                    <input
                        id="username"
                        type="text"
                        className="field-inputs"
                        placeholder="Enter username"
                        value={username}
                        onChange={e => setUsername(e.target.value.trim())}
                    />
                </div>
                <div className="fields" title="Enter your password here.">
                    <img src="src/assets/password-icon.svg" alt="Password Icon" className="icons" />
                    <input
                        id="password"
                        type="text"
                        className="field-inputs"
                        placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.target.value.trim())}
                    />
                </div>
                <input type="submit" className="submit-button" value="Log In" title="Log into the account with the details you entered." />
            </form>
            <a onClick={() => navigate("/recovery")} id="forgot" title="Click this if you forgot your username or password.">Forgot your username or password?</a>
            <div id="signup-prompt" title="Click here if you want to sign up for ShatterStar space news.">
                <p>Not a member?</p>
                <img src="src/assets/shatter-star-logo.svg" alt="" />
                <a onClick={() => navigate("signup")} id="goto-signup">Sign Up</a>
            </div>
        </>
    );
}

export default Login;