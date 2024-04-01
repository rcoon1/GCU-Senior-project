import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Homepage/Homepage"
import Login from "./Pages/loginSignup/Login";
import Footer from "./Components/Footer/Footer";
import { useDispatch } from "react-redux";
import { userInfoFetched } from "./redux/authActions";
import Singnup from "./Pages/loginSignup/Signup";
function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userInfoFetched(JSON.parse(localStorage.getItem("UserData"))));
    }, []);

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/signup" element={<Singnup />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
