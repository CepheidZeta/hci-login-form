import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'

import Login from "./components/Login";
import Signup from "./components/Signup";
import Redirect from "./components/Redirect";
import Recovery from "./components/Recovery";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/redirect" element={<Redirect />} />
                <Route path="/recovery" element={<Recovery />} />
            </Routes>
        </Router>
    );
}

export default App;