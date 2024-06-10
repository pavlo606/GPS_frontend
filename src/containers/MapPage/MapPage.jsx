import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { GoogleMap, Polyline, useLoadScript } from "@react-google-maps/api";
import { ItemsBaseURL, getPoints } from "../../API/api";
import { useParams } from 'react-router-dom';

const MapPage = () => {
    const { route_id } = useParams();
    
    const [currentItem, setCurrentItem] = useState(null);
    const [coords, setCoords] = useState([{ lat: 49.826354, lng: 24.015322 }]);

    useEffect(() => {
        axios.get(`${ItemsBaseURL}/route/${route_id}`).then((response) => {
            console.log(response.data);
            setCurrentItem(response.data);
        });
    }, [route_id]);

    useEffect(() => {
        if (!currentItem) {
            return;
        }
        getPoints(currentItem.id, (data) => {
            console.log(data.map((coord) => ({lat: parseFloat(coord.lat), lng: parseFloat(coord.lon)})));
            setCoords(data.map((coord) => ({lat: parseFloat(coord.lat), lng: parseFloat(coord.lon)})));
        });
    }, [currentItem]);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBWK29r3NECL85qM_FD-Z48Ww1StnXQdEs",
    });

    return (
        <div>
            {/* <p>Id: {route_id}</p> */}
            <div style={{height: '70vh'}}>
                {!isLoaded ? (
                    <h1>Loading...</h1>
                ) : (
                    <GoogleMap
                        center={coords[0]}
                        zoom={15}
                        mapContainerStyle={{ width: "100%", height: "100%" }}
                    >
                        <Polyline
                            path={coords}
                            options={{
                                strokeColor: '#FF0000',
                            }}
                        />
                        
                    </GoogleMap>
                )}
            </div>
        </div>
    )
}

export default MapPage;