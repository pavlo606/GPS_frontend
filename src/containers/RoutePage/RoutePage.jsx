import React, { useState, useEffect } from "react";

import { getRoutes } from "../../API/api";
import RouteCard from "../../components/RouteCard/RouteCard";

import "./RoutePage.css";;

const RoutePage = () => {
    const [routes, setRoutes] = useState([]);

    const loadRoutes = () => {
        const current_user = JSON.parse(localStorage.getItem('login'));
        getRoutes(current_user.id, (data) => {
            setRoutes(data);
        });
    }

    useEffect(() => {
        loadRoutes();
    }, [])

    return (
        <div>
            <h1>Мої маршрути</h1>
            <div className="routes-container">
                {
                    routes.map((route) => {
                        return (
                            <div key={route.id}>
                                <RouteCard {...route}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RoutePage;