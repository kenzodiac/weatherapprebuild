import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Button, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import React, { useState } from 'react';
import '../App.css'
import CityInfoComponent from './CityInfoComponent';
import DailyComponent from './DailyComponent';

export default function MainStage() {
    return (
        <Container>
            {/* ~~~~~~~~~~~~~~~Navbar~~~~~~~~~~~~~~~ */}
            <Row>
                {['md'].map((expand) => (
                    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                        <Container fluid>
                            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
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
                                        <Button variant="outline-success">Search</Button>
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