import React from "react";
import route from "../../assets/route.png"
import { Link } from "react-router-dom";
import { Menu, Button, Flex } from 'antd';

import "./RouteCard.css";

const RouteCard = ({ name, id }) => {
    return (
        <div className="route-container">
            <Link to={`/map/${id}`}>
                <img src={route} alt="" />
                <h3>{name}</h3>
            </Link>
        </div>
    )
}

export default RouteCard;