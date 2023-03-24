import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import '../App.css'
import { getLocalStorage, saveFavoriteToLocalStorage, removeFromLocalStorage, getCoordsLocalStorage } from '../Services/LocalStorage';
import { AsyncReverseGeocoding } from '../Services/DataServices';

function CityInfoComponent(props) {
    
    // const [isFav, setIsFav] = useState(false);
    const [tempLocalStorage, setTempLocalStorage] = useState([]);

    useEffect(() => {
        setTempLocalStorage(getCoordsLocalStorage);
    }, []);

    async function handleClick(){
        let tempData = getCoordsLocalStorage();
        setTempLocalStorage(getCoordsLocalStorage);
        // console.log(tempLocalStorage);
        let tempData2 = await AsyncReverseGeocoding(tempData.Latitude, tempData.Longtiude);
        // console.log(tempData2);
        saveFavoriteToLocalStorage(tempData2);
        // console.log(getLocalStorage());
    }
    
    return(
        <div className="cityInfoBody d-flex flex-column justify-content-between">
            <div>
                <div className="cityName mt-4">{props.city}, {props.state} <button type="button" className="fav-btn" onClick={handleClick}>{props.fav}</button></div>
                <div className="citySubtitle my-2">{props.date}</div>
                <div className="citySubtitle">{props.day}</div>
            </div>
            <div className="mb-5">
                <div><span className="cityCurrentlyTitle">Currently</span> <span className="cityCurrentlySubtitle">@{props.time}</span></div>
                <div><span className="cityTempF">{props.currentTempF}°F</span><span className="cityTempC">/{props.currentTempC}°C</span></div>
                <div className="cityCondition">{props.weatherConditions} <img className="cityConditionIcon" src={props.currentWeatherIcon} alt="Current Weather Icon"/></div>
                <div className="cityTempC">{props.windSpeed}mph Winds</div>
            </div>
            <div>
                <div className="cityCondition">High: {props.highTemp}°F <img className="cityHighLowIcons" src={props.highTempIcon} alt="Today High Temp Icon"/> <span style={{fontSize: "20px"}} className="">{props.highDesc}</span></div>
                <div className="cityCondition">Low: {props.lowTemp}°F <img className="cityHighLowIcons" src={props.lowTempIcon} alt="Today Low Temp Icon"/> <span style={{fontSize: "20px"}}>{props.lowDesc}</span></div>
            </div>
        </div>
    );
};

export default CityInfoComponent;