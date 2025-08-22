function Redirect() {
    return (
        <>
            <h2>Welcome, Valued Member!</h2>
            <button
                className="submit-button"
                onClick={() =>
                    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
                }>
                    Click here to proceed to exciting space news »
            </button>
        </>
    );
}

export default Redirect;