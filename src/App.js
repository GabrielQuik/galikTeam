import React, { Component } from 'react';

import './App.css';

import left_content_image from '../assets/images/M67A6522_1.jpg';
import right_content_image from '../assets/images/M67A6522_2.jpg';

class App extends Component {
    render() {
        return (
            <div id="main">
                <div id="left"></div>
                <div id="right"></div>
                <div id="top"></div>
                <div id="bottom"></div>
                <a className="nav" href="#menu">
                    <svg height="16px" width="27px" version="1.1" viewBox="0 0 27 16">
                        <defs />
                        <g id="Symbols" fill="none" stroke="none" strokeLinecap="square" strokeWidth="1">
                            <g id="hamburger" stroke="#FFFFFF" strokeWidth="2" transform="translate(-12.000000, -17.000000)">
                                <path id="Line" d="M13,18 L38,18" />
                                <path id="Line-Copy" d="M13,25 L38,25" />
                                <path id="Line-Copy-2" d="M13,32 L38,32" />
                            </g>
                        </g>
                    </svg>
                    <span id="menu_text">
                        menu
                    </span>
                </a>
                <div className="content_start">
                    <div className="left_content content_start_bar">
                        <div className="bar_content_bg">
                            <img src={left_content_image} alt="Treningi personalne dla każdego" />
                        </div>
                    </div>
                    <div className="right_content content_start_bar">
                        <div className="bar_content_bg">
                            <img src={right_content_image} alt="Przygotowanie motoryczne sportowców" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
