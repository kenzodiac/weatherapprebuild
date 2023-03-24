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
import ParseStateInfo from '../Services/StateCodeParsing';
import EvaluateCurrentTime from '../Services/DateParsing';
import EvaluateWeatherIcon from '../Services/EvalWeatherIcon';
import EvaluateCurrentBackground from '../Services/EvalWeatherBg';
import CapitalizeWords from '../Services/CapitalizeWords';
import Parse5DayForecastInfo from '../Services/Parse5DayForecastInfo';
import EvaluateFiveDayCardBg from '../Services/Eval5DayCardBg';

import cloudIcon from '../assets/images/weatherIcons/cloudIcon.png';



export default function MainStage() {
    //useStates for storing variables
    //location data from AsynchReverseWeatherCoords
    const [locationData, setLocationData] = useState([{
        name: 'Lodi',
        state: 'California',
        country: 'US'
    }]);
    //current city information from AsyncLocalWeather
    const [currentCityData, setCurrentCityData] = useState({
        main: { temp: 56 },
        wind: { speed: 6 },
        weather: [{ description: 'scattered clouds', icon: '03d', main: 'Clouds' }]
    });
    //current city 5 day forecast information from AsyncFiveDayWeather
    const [currentCity5DayData, setCurrentCity5DayData] = useState({});
    //current city 5 day forecast information laundered for populating page
    const [launderedCurrentCity5DayData, setLaunderedCurrentCity5DayData] = useState({
        Day1: {
            title: "Mon",
            icon: cloudIcon,
            highTemp: {
                highTemp: 65,
                highIcon: "03d",
                highDescription: "Cloudy"
            },
            lowTemp: {
                lowTemp: 32,
                lowIcon: "03d",
                highDescription: "Cloudy"
            }
        },

        Day2: {
            title: "Tue",
            icon: cloudIcon,
            highTemp: {
                highTemp: 65,
                highIcon: "03d",
                highDescription: "Cloudy"
            },
            lowTemp: {
                lowTemp: 32,
                lowIcon: "03d",
                highDescription: "Cloudy"
            }
        },

        Day3: {
            title: "Wed",
            icon: cloudIcon,
            highTemp: {
                highTemp: 65,
                highIcon: "03d",
                highDescription: "Cloudy"
            },
            lowTemp: {
                lowTemp: 32,
                lowIcon: "03d",
                highDescription: "Cloudy"
            }
        },

        Day4: {
            title: "Thu",
            icon: cloudIcon,
            highTemp: {
                highTemp: 65,
                highIcon: "03d",
                highDescription: "Cloudy"
            },
            lowTemp: {
                lowTemp: 32,
                lowIcon: "03d",
                lowDescription: "Cloudy"
            }
        },

        Day5: {
            title: "Fri",
            icon: cloudIcon,
            highTemp: {
                highTemp: 65,
                highIcon: "03d",
                highDescription: "Cloudy"
            },
            lowTemp: {
                lowTemp: 32,
                lowIcon: "03d",
                highDescription: "Cloudy"
            }
        }
    });
    //current time
    const [currentTimeData, setCurrentTimeData] = useState({
        currentDate: "March 23, 2023",
        currentTime: "3:44pm",
        currentTimeDayOfWeek: "Thursday"
    });

    async function handleKeyPress(e) {
        if (e.key === 'Enter') {
            let tempInput = e.target.value;
            let tempWeatherCoords = await AsyncLocalWeatherCoords(tempInput);
            let tempLat = tempWeatherCoords[0].lat;
            let tempLon = tempWeatherCoords[0].lon;
            let tempLocData = await AsyncReverseGeocoding(tempLat, tempLon);
            let tempCityData = await AsyncLocalWeather(tempLat, tempLon);
            let temp5DayData = await AsyncFiveDayWeather(tempLat, tempLon);
            setLocationData(tempLocData);
            setCurrentCityData(tempCityData);
            setCurrentTimeData(EvaluateCurrentTime());
            setCurrentCity5DayData(temp5DayData);
            let tempLaundered5DayData = await Parse5DayForecastInfo(temp5DayData);
            setLaunderedCurrentCity5DayData(tempLaundered5DayData);

            // setTimeout(console.log(tempLat), 500);
            // setTimeout(console.log(tempLon), 500);
            // setTimeout(console.log(tempWeatherCoords), 500);
            // setTimeout(console.log(tempLocData), 500);
            // setTimeout(console.log(tempCityData), 500);
            // setTimeout(console.log(EvaluateCurrentTime()), 500);
            // setTimeout(console.log(temp5DayData), 500);
            // setTimeout(console.log(tempLaundered5DayData), 500);
        }
    };

    //default location/time obtained from user browser on load
    async function success(position) {
        const tempLat = position.coords.latitude;
        const tempLon = position.coords.longitude;
        const tempLocData = await AsyncReverseGeocoding(tempLat, tempLon);
        const tempCityData = await AsyncLocalWeather(tempLat, tempLon);
        const tempTimeData = EvaluateCurrentTime();
        const temp5DayData = await AsyncFiveDayWeather(tempLat, tempLon);
        setLocationData(tempLocData);
        setCurrentCityData(tempCityData);
        setCurrentTimeData(tempTimeData);
        setCurrentCity5DayData(temp5DayData);
        const tempLaundered5DayData = await Parse5DayForecastInfo(temp5DayData);
        setLaunderedCurrentCity5DayData(tempLaundered5DayData);

        // setTimeout(console.log(tempLat), 500);
        // setTimeout(console.log(tempLon), 500);
        // setTimeout(console.log(tempLocData), 500);
        // setTimeout(console.log(tempCityData), 500);
        // setTimeout(console.log(EvaluateCurrentTime()), 500);
        // setTimeout(console.log(temp5DayData), 500);
        // setTimeout(console.log(tempLaundered5DayData), 500);
    };
    function error(err) {
        console.warn(err.message);
    };
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error, options);
        document.body.setAttribute("style", `background-color: #3E3E3E`);
    }, []);



    //main return
    return (
        <Container fluid style={{ height: "100vh" }}>

            {/* ~~~~~~~~~~~~~~~Navbar~~~~~~~~~~~~~~~ */}
            <Row className="">
                {['md'].map((expand) => (
                    <Navbar key={expand} expand={expand} className="mb-3 navigation-bar">
                        <Container fluid>
                            <button type="button" href="#" className="favorites-btn pe-3 me-5">⭐ Favorites</button>
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
                                    <Nav className="justify-content-center flex-grow-1 pe-3">
                                        <Navbar.Brand href="#">Weather</Navbar.Brand>
                                    </Nav>
                                    <Form className="d-flex">
                                        <input
                                            type="search"
                                            placeholder=" search"
                                            className="me-2 rounded-3 search-bar"
                                            aria-label="Search"
                                            onKeyDown={handleKeyPress}
                                        />
                                        <input
                                            type="search"
                                            placeholder=" search"
                                            className="me-2 rounded-3 search-bar d-none"
                                            aria-label="Search"
                                            onKeyDown={handleKeyPress}
                                        />
                                    </Form>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </Row>

            {/* ~~~~~~~~~~~~~~~Main Staging Area~~~~~~~~~~~~~~~ */}
            <Row style={{ minHeight: "calc(100vh - 124px)" }} className="align-items-center">
                <Col>
                    <Container>
                        <Row className="g-5">
                            <Col className={`rounded-3 pb-4 me-3 ms-4 cityInfoBg ${EvaluateCurrentBackground(currentCityData.weather[0].icon)}`}>
                                <CityInfoComponent
                                    city={locationData[0].name} //
                                    state={ParseStateInfo(locationData[0].state, locationData[0].country)} //
                                    fav={'⭐'}
                                    highTemp={launderedCurrentCity5DayData.Day1.highTemp.highTemp}
                                    lowTemp={launderedCurrentCity5DayData.Day1.lowTemp.lowTemp}
                                    day={currentTimeData.currentTimeDayOfWeek}
                                    date={currentTimeData.currentDate}
                                    time={currentTimeData.currentTime}
                                    weatherConditions={CapitalizeWords(currentCityData.weather[0].description)}
                                    currentWeatherIcon={EvaluateWeatherIcon(currentCityData.weather[0].icon)}
                                    currentTempF={Math.round(currentCityData.main.temp)}
                                    currentTempC={Math.round(((currentCityData.main.temp - 32) / 9) * 5)}
                                    windSpeed={Math.round(currentCityData.wind.speed)}
                                    highTempIcon={EvaluateWeatherIcon(launderedCurrentCity5DayData.Day1.highTemp.highIcon)}
                                    lowTempIcon={EvaluateWeatherIcon(launderedCurrentCity5DayData.Day1.lowTemp.lowIcon)}
                                    highDesc={launderedCurrentCity5DayData.Day1.highTemp.highDescription}
                                    lowDesc={launderedCurrentCity5DayData.Day1.lowTemp.lowDescription}
                                //bgImage={EvaluateCurrentBackground(currentCityData.weather[0].icon)}
                                />
                            </Col>
                            <Col className={"rounded-3 pb-4 me-4 ms-3"} style={{ backgroundColor: "#747474" }}>
                                <div className="fiveDayHeader pb-1 pt-2">5-Day Forecast:</div>
                                <DailyComponent
                                    bgColor={`${EvaluateFiveDayCardBg(launderedCurrentCity5DayData.Day1.icon)} d-flex flex-row justify-content-between rounded-3`}
                                    day={launderedCurrentCity5DayData.Day1.title}
                                    weatherIcon={EvaluateWeatherIcon(launderedCurrentCity5DayData.Day1.icon)}
                                    highTemp={launderedCurrentCity5DayData.Day1.highTemp.highTemp}
                                    lowTemp={launderedCurrentCity5DayData.Day1.lowTemp.lowTemp}
                                />
                                <DailyComponent
                                    bgColor={`${EvaluateFiveDayCardBg(launderedCurrentCity5DayData.Day2.icon)} d-flex flex-row justify-content-between my-3 rounded-3`}
                                    day={launderedCurrentCity5DayData.Day2.title}
                                    weatherIcon={EvaluateWeatherIcon(launderedCurrentCity5DayData.Day2.icon)}
                                    highTemp={launderedCurrentCity5DayData.Day2.highTemp.highTemp}
                                    lowTemp={launderedCurrentCity5DayData.Day2.lowTemp.lowTemp}
                                />
                                <DailyComponent
                                    bgColor={`${EvaluateFiveDayCardBg(launderedCurrentCity5DayData.Day3.icon)} d-flex flex-row justify-content-between my-3 rounded-3`}
                                    day={launderedCurrentCity5DayData.Day3.title}
                                    weatherIcon={EvaluateWeatherIcon(launderedCurrentCity5DayData.Day3.icon)}
                                    highTemp={launderedCurrentCity5DayData.Day3.highTemp.highTemp}
                                    lowTemp={launderedCurrentCity5DayData.Day3.lowTemp.lowTemp}
                                />
                                <DailyComponent
                                    bgColor={`${EvaluateFiveDayCardBg(launderedCurrentCity5DayData.Day4.icon)} d-flex flex-row justify-content-between my-3 rounded-3`}
                                    day={launderedCurrentCity5DayData.Day4.title}
                                    weatherIcon={EvaluateWeatherIcon(launderedCurrentCity5DayData.Day4.icon)}
                                    highTemp={launderedCurrentCity5DayData.Day4.highTemp.highTemp}
                                    lowTemp={launderedCurrentCity5DayData.Day4.lowTemp.lowTemp}
                                />
                                <DailyComponent
                                    bgColor={`${EvaluateFiveDayCardBg(launderedCurrentCity5DayData.Day5.icon)} d-flex flex-row justify-content-between rounded-3`}
                                    day={launderedCurrentCity5DayData.Day5.title}
                                    weatherIcon={EvaluateWeatherIcon(launderedCurrentCity5DayData.Day5.icon)}
                                    highTemp={launderedCurrentCity5DayData.Day5.highTemp.highTemp}
                                    lowTemp={launderedCurrentCity5DayData.Day5.lowTemp.lowTemp}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            {/* ~~~~~~~~~~~~~~~Footer~~~~~~~~~~~~~~~ */}
            <Row>
                <Navbar className="navigation-bar">
                    <Container className="d-flex justify-content-center">
                        <Navbar.Brand>By: Kenneth Fujimura</Navbar.Brand>
                    </Container>
                </Navbar>
            </Row>
        </Container>
    );
};