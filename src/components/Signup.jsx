import { useState } from "react";
import { useNavigate } from "react-router-dom";
import showTooltip from "../tooltip";

function Signup() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const navigate = useNavigate();

    /**
     * Checks if an email is valid.
     * @param {String} testEmail Email to be tested
     * @returns True if valid
     */
    const isValidEmail = (testEmail) => {
        const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        return regex.test(testEmail);
    }

    /**
     * Checks if a username is valid.
     * @param {String} testUsername Username to be tested
     * @returns True if valid
     */
    const isValidUsername = (testUsername) => {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(testUsername);
    }

    /**
     * Checks if a password is valid.
     * @param {String} testPassword Password to be tested
     * @returns True if valid
     */
    const isValidPassword = (testPassword) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$/;
        return regex.test(testPassword);
    }

    /**
     * Processes the information given by the user when becoming a member.
     */
    const processSubmission = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        /* If the user signs up, there should be information typed in. */
        if (email === "" || username === "" || password === "" || repassword === "") {
            showTooltip("One or more fields seem to be empty.", "red");
            return;
        }

        /* The password and retyped password should be the same. */
        if (password != repassword) {
            showTooltip("Please make sure your password and retyped password are the same.", "red");
            return;
        }

        /* Existing users should not be allowed to sign up again. */
        let userCheck = users.find(u => u.username === username || u.email === email);
        if (userCheck != undefined) {
            showTooltip("It seems you are already a Member. Try logging in instead.", "red");
            return;
        }

        /* The email, username, and password have to be tested. */
        if (!isValidEmail(email)) {
            showTooltip("Your email seems invalid.", "red");
            return;
        }
        if (!isValidUsername(username)) {
            showTooltip("Your username seems invalid. Please only use letters and numbers.", "red");
            return;
        }
        if (!isValidPassword(password)) {
            showTooltip("Your password seems invalid. It must contain at least one lowercase letter, one uppercase letter, and one number.", "red");
            return;
        }

        /* Once everything is cleared, then and only then should the user information be saved. */
        users.push({ email, username, password });
        localStorage.setItem("users", JSON.stringify(users));
        navigate("/");

        showTooltip("Sign up successful. Welcome to ShatterStar! Please log in using your new credentials.", "green");
    };

    return (
        <>
            <h2>Member Signup</h2>
            <form onSubmit={processSubmission} className="form-box">
                <div className="fields" title="Enter your email address here.">
                    <img src="/assets/email-icon.svg" alt="Email Icon" className="icons" />
                    <input
                        id="new-email"
                        type="text"
                        className="field-inputs"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value.trim())}
                    />
                </div>
                <div className="fields" title="Your username should only contain lowercase letters, uppercase letters, and numbers.">
                    <img src="/assets/username-icon.svg" alt="Username Icon" className="icons" />
                    <input
                        id="new-username"
                        type="text"
                        className="field-inputs"
                        placeholder="Enter username"
                        value={username}
                        onChange={e => setUsername(e.target.value.trim())}
                    />
                </div>
                <div className="fields" title="Your password must contain at least one lowercase letter, one uppercase letter, and one number.">
                    <img src="/assets/password-icon.svg" alt="Password Icon" className="icons" />
                    <input
                        id="new-password"
                        type="text"
                        className="field-inputs"
                        placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.target.value.trim())}
                    />
                </div>
                <div className="fields" title="Retype your password to confirm.">
                    <img src="/assets/password-icon.svg" alt="Password Icon" className="icons" />
                    <input
                        id="retype-password"
                        type="text"
                        className="field-inputs"
                        placeholder="Retype password"
                        value={repassword}
                        onChange={e => setRepassword(e.target.value.trim())}
                    />
                </div>
                <input type="submit" className="submit-button" value="Sign Up" title="Sign up with the details you entered." />
            </form>
            <div id="signup-prompt" title="Click here if you are already a Member.">
                <p>Already a member?</p>
                <img src="/assets/shatter-star-logo.svg" alt="ShatterStar Logo" />
                <a onClick={() => navigate("/")}>Log In</a>
            </div>
        </>
    );
}

export default Signup;