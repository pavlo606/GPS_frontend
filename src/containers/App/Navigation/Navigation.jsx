import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../../Home/Home";
import RoutePage from "../../RoutePage/RoutePage";
import Login from "../../Login/Login";
import Register from "../../Register/Register";

const Navigation = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/*" element={<Navigate to="/home" />} key="/*" />
                <Route path="/home" element={<Home />} key="/home" />
                <Route path="/routes" element={<RoutePage />} key="/routes" />
                <Route path="/login" element={<Login />} key="/login" />
                <Route path="/register" element={<Register />} key="/register" />
            </Routes>
            <Footer />
        </div>
    );
}

export default Navigation;