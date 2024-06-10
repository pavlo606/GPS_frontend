import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../../Home/Home";
import RoutePage from "../../RoutePage/RoutePage";
import Login from "../../Login/Login";
import SignUp from "../../SignUp/SignUp";
import MapPage from "../../MapPage/MapPage";
import ProtectedRoute from "../../../components/ProtectedRoute/ProtectedRoute";


const Navigation = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(JSON.parse(localStorage.getItem('login')));

    return (
        <div>
            {isAuthenticated && <Header setAuth={setIsAuthenticated} />}
            <Routes>
                <Route element={<ProtectedRoute isAuth={isAuthenticated} redirect="/login" />}>
                    <Route path="/*" element={<Navigate to="/home" />} key="/*" />
                    <Route path="/home" element={<Home />} key="/home" />
                    <Route path="/routes" element={<RoutePage />} key="/routes" />
                    <Route path="/map/:route_id" element={<MapPage />} key="/map" />
                </Route>
                <Route element={<ProtectedRoute isAuth={!isAuthenticated} redirect="/" />}>
                    <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} key="/login" />
                    <Route path="/signup" element={<SignUp setAuth={setIsAuthenticated} />} key="/signup" />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default Navigation;