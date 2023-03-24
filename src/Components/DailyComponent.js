import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import React, { useState } from 'react';
import '../App.css'

function DailyComponent(props) {
    return(
        <div className={props.bgColor}>
            <div><span className="fiveDayName ms-3">{props.day}: </span></div>
            <div><img className="fiveDayIcon" src={props.weatherIcon} alt="Weather Icon"/></div>
            <div><span className="fiveDayTemps me-3">H: {props.highTemp}° / L: {props.lowTemp}°</span></div>
        </div>
    );
};

export default DailyComponent;