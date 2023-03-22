import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import React, { useState } from 'react';
import '../App.css'

function DailyComponent(props) {
    return(
        <div className={props.bgColor}>
            <div><span>{props.day}: </span> {props.weatherIcon}</div>
            <div><span>H: {props.highTemp}°/L: {props.lowTemp}°</span></div>
        </div>
    );

};

export default DailyComponent;