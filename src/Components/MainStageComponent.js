//Importing CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
//Importing React/Bootstrap Components
import { Row, Col, Container, Button, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
//Importing Components
import CityInfoComponent from './CityInfoComponent';
import DailyComponent from './DailyComponent';
//Importing Functions From Services
import { AsyncLocalWeatherCoords, AsyncLocalWeather, AsyncFiveDayWeather, AsyncReverseGeocoding } from '../Services/DataServices';
import { saveFavoriteToLocalStorage, getLocalStorage, removeFromLocalStorage } from '../Services/LocalStorage';
import ParseStateInfo from '../Services/StateCodeParsing';
import EvaluateCurrentTime from '../Services/DateParsing';
import EvaluateWeatherIcon from '../Services/EvalWeatherIcon';
import EvaluateCurrentBackground from '../Services/EvalWeatherBg';


export default function MainStage() {
    //useStates for storing variables
    const [locationData, setLocationData] = useState({});
    const [currentCityData, setCurrentCityData] = useState({});
    const [currentCity5DayData, setCurrentCity5DayData] = useState({});
    const [currentTimeData, setCurrentTimeData] = useState({});
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [inputValue, setInputValue] = useState('');

    //functions for handling search field input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    async function handleKeyPress(e) {
        if (e.key === 'Enter') {
            //console.log(inputValue);
            //console.log(AsyncLocalWeatherCoords(inputValue));
            setLatitude(await AsyncLocalWeatherCoords(inputValue).lat);
            setLongitude(await AsyncLocalWeatherCoords(inputValue).lon);
            //console.log(latitude);
            //console.log(longitude);
            setLocationData(await AsyncReverseGeocoding(latitude, longitude));
            setCurrentCityData(await AsyncLocalWeather(latitude, longitude));
            setCurrentTimeData(EvaluateCurrentTime());
            setCurrentCity5DayData(await AsyncFiveDayWeather(latitude, longitude));
            console.log(latitude);
            console.log(longitude);
            console.log(locationData);
            console.log(currentCityData);
            console.log(currentTimeData);
            console.log(currentCity5DayData);
        }
    }

    const handleSearchPress = () => {
        console.log(latitude);
        console.log(longitude);
        console.log(locationData);
        console.log(currentCityData);
        console.log(currentTimeData);
        console.log(currentCity5DayData);
    }

    //default location/time obtained from user browser on load
    async function success(position){
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        await setLocationData(await AsyncReverseGeocoding(latitude, longitude));
        await setCurrentCityData(await AsyncLocalWeather(latitude, longitude));
        setCurrentTimeData(EvaluateCurrentTime());
        await setCurrentCity5DayData(await AsyncFiveDayWeather(latitude, longitude));
        console.log(latitude);
        console.log(longitude);
        console.log(locationData);
        console.log(currentCityData);
        console.log(currentTimeData);
        console.log(currentCity5DayData);
    };
    function error(err){
        console.warn(err.message);
    };
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    useEffect(() => {
        //navigator.geolocation.getCurrentPosition(success, error, options);
        console.log('hi');

    }, []);

    //main return
    return (
        <Container>
            {/* ~~~~~~~~~~~~~~~Navbar~~~~~~~~~~~~~~~ */}
            <Row>
                {['md'].map((expand) => (
                    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                        <Container fluid>
                            <Navbar.Brand href="#">Weather</Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Offcanvas
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link href="#action1">Home</Nav.Link>
                                        <Nav.Link href="#action2">Link</Nav.Link>

                                    </Nav>
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <input
                                            type="search" 
                                            placeholder="search" 
                                            className="me-2" 
                                            aria-label="Search"
                                            onChange={handleInputChange}
                                            onKeyDown={handleKeyPress}
                                        />
                                        <button variant="outline-success" onClick={handleSearchPress}>Search</button>
                                    </Form>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </Row>
            
            {/* ~~~~~~~~~~~~~~~Main Staging Area~~~~~~~~~~~~~~~ */}
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <CityInfoComponent 
                                    city={'Lodi'}
                                    state={'CA'}
                                    fav={'⭐'}
                                    highTemp={'58'}
                                    lowTemp={'39'}
                                    time={'12:30pm'}
                                    weatherConditions={'Clear Skies'}
                                    currentTempC={'13'}
                                    windSpeed={'6'}
                                    highTempIcon={'☀️'}
                                    lowTempIcon={'☀️'}
                                    bgImage={'image.jpg'}
                                />
                            </Col>
                            <Col>
                                <span>5-Day Forecast</span>
                                <DailyComponent
                                    bgColor={'sunnyBg d-flex flex-row justify-content-between'}
                                    day={'Mon'}
                                    weatherIcon={'☀️'}
                                    highTemp={'65'}
                                    lowTemp={'32'}
                                />
                                <DailyComponent
                                    bgColor={'sunnyBg d-flex flex-row justify-content-between'}
                                    day={'Tue'}
                                    weatherIcon={'🍃'}
                                    highTemp={'65'}
                                    lowTemp={'32'}
                                />
                                <DailyComponent
                                    bgColor={'cloudyBg d-flex flex-row justify-content-between'}
                                    day={'Wed'}
                                    weatherIcon={'⛅'}
                                    highTemp={'65'}
                                    lowTemp={'32'}
                                />
                                <DailyComponent
                                    bgColor={'rainyBg d-flex flex-row justify-content-between'}
                                    day={'Thu'}
                                    weatherIcon={'🌧️'}
                                    highTemp={'65'}
                                    lowTemp={'32'}
                                />
                                <DailyComponent
                                    bgColor={'hazeBg d-flex flex-row justify-content-between'}
                                    day={'Fri'}
                                    weatherIcon={'🌫️'}
                                    highTemp={'65'}
                                    lowTemp={'32'}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            
            {/* ~~~~~~~~~~~~~~~Footer~~~~~~~~~~~~~~~ */}
            <Row>
                <Col>
                    
                </Col>
            </Row>
        </Container>
    );
};