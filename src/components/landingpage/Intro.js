import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Intro() {
    return (
        <section id="intro" className="relative">
            <div className="beige_bg"></div>
            <div className="container">
                <div className="subheading_container">
                    <h3>Et unikt hjem</h3>
                </div>
                <div className="intro_grid">
                    <div className="intro_image">
                        <img src={`../img/intro_img_2.jpg`} alt="" />
                    </div>
                    <div className="intro_content">
                        <h2 className="mb-20">Personlighed til hverdagen</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                        <div className="btn_container mt-30">
                            <Link to="/productlist"><button className="btn_small">Se udvalget</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}