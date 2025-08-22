import { useState } from "react"
import { useNavigate } from "react-router-dom";
import showTooltip from "../tooltip";

function Recovery() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    /**
     * Processes the email provided by the user for recovery.
     */
    const processSubmission = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        /* The email needs to be checked against local storage. */
        const user = users.find(u => u.email === email)

        if (email === "") {
            showTooltip("Please enter a valid email.", "red");
            return;
        }

        if (!user) {
            showTooltip("The email you entered does not match any Member's account. Consider signing up or double-checking your email.", "black");
            return;
        }

        showTooltip("Your username is " + user.username + " and your password is " + user.password, "green");
        navigate("/");
    };

    return (
        <>
            <h2>Recover Account</h2>
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
                <div id="signup-prompt">
                    <p>Remembered your login details?</p>
                    <img src="/assets/shatter-star-logo.svg" alt="ShatterStar Logo" />
                    <a onClick={() => navigate("/")}>Log In</a>
                </div>
                <input type="submit" className="submit-button" value="Get Account Details" title="Sign up with the details you entered." />
            </form>

        </>
    )
}

export default Recovery;