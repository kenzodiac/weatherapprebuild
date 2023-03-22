import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import React, { useState } from 'react';
import '../App.css'

function CityInfoComponent(props) {
    return(
        <>
            <span>{props.city}, {props.state} {props.fav}</span>

            <div>H: {props.highTemp}, L: {props.lowTemp}</div>

            <div>Currently @{props.time}</div>

            <div>{props.weatherConditions}</div>

            <div>{props.currentTempF}°F/{props.currentTempC}°C</div>

            <div>{props.windSpeed}mph Winds</div>

            <div>High: {props.highTemp}°F {props.highTempIcon}</div>

            <div>Low: {props.lowTemp}°F {props.lowTempIcon}</div>
        </>
    );
};

export default CityInfoComponent;