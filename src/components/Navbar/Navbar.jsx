import React from 'react';
import "./Navbar.scss";
import Vector from "./image/Vector.png";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <div className="navbar-brand">
                        <img src={Vector} alt="Logo" height="35" />
                    </div>
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/company">Company</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/case-study">Case Study</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/services" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services <i className="bi bi-caret-down-fill"></i>
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                <li><Link className="dropdown-item" to="/web-service">Web Devlopment</Link></li>
                                <li><Link className="dropdown-item" to="/design-service">Design</Link></li>
                                <li><Link className="dropdown-item" to="/software-service">Software Devlopment</Link></li>
                                <li><Link className="dropdown-item" to="/appDev-service">Application Devlopment</Link></li>
                                <li><Link className="dropdown-item" to="/game-service">Game Devlopment</Link></li>
                                <li><Link className="dropdown-item" to="/digital-service">Digital Marketing</Link></li>
                                <li><Link className="dropdown-item" to="/iot-service"> IOT Apps</Link></li>
                                <li><Link className="dropdown-item" to="/blockchain-service"> Blockchain Devlopment</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <Link className="nav-link" to="/contact-us">
                            <button className="btn btn-dark ms-3">Contact Us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default App;
