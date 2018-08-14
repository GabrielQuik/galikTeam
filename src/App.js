import React, { Component } from "react";

import { Fragment } from 'react';
import "./App.css";

import leftContentImage from "../assets/images/M67A6522_1.jpg";
import rightContentImage from "../assets/images/M67A6522_2.jpg";

import logo from '../assets/images/galikteamlogo.png';

class App extends Component {
    render() {
        const imageList = [
            { uid: 1, id: 'half__1', src: leftContentImage, alt: 'Treningi personalne dla każdego', link: '/treningi-personalne' },
            { uid: 2, id: 'half__2', src: rightContentImage, alt: 'Przygotowanie motoryczne sportowców', link: '/przygotowanie-motoryczne-sportowcow' }
        ];
        return (
            <Fragment>
                <a className="nav" href="#menu">
                    <svg height="16px" width="27px" version="1.1" viewBox="0 0 27 16">
                        <defs />
                        <g
                            id="Symbols"
                            fill="none"
                            stroke="none"
                            strokeLinecap="square"
                            strokeWidth="1"
                        >
                            <g
                                id="hamburger"
                                stroke="#FFFFFF"
                                strokeWidth="2"
                                transform="translate(-12.000000, -17.000000)"
                            >
                                <path id="Line" d="M13,18 L38,18" />
                                <path id="Line-Copy" d="M13,25 L38,25" />
                                <path id="Line-Copy-2" d="M13,32 L38,32" />
                            </g>
                        </g>
                    </svg>
                    <span id="menu_text">menu</span>
                </a>
                <div className='header__logo'>
                    <img className="header__logo__img" src={logo} alt="GALIKteam"/>
                </div>
                <div className="container">
                    {imageList.map(imageData => (
                        <div key={imageData.uid} className={"container__half " + imageData.id}>
                            <img
                                className="half__image"
                                src={imageData.src}
                                alt={imageData.alt}
                            />
                            <div className="half__desc">
                                <span className="half__desc__text">
                                    {imageData.alt}
                                </span>
                                <div data-id={imageData.id} className="button half__desc__button">
                                    <a  href={imageData.link} className="button__link" data-id={imageData.id}>
                                        wybierz
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div id="toAbout">
                    <svg height="19px" width="109px" version="1.1" viewBox="0 0 109 19">
                        <defs />
                        <g id="desktop" fill="none" stroke="none" strokeWidth="1">
                            <g id="start" transform="translate(-906.000000, -1014.000000)">
                                <polyline
                                    id="Path-3"
                                    points="906.666667 1015.66406 960.442708 1031.48438 1014.21875 1015.66406"
                                    stroke="#FFFFFF"
                                    strokeWidth="2"
                                />
                            </g>
                        </g>
                    </svg>
                </div>
            </Fragment>
        );
    }
}

export default App;
