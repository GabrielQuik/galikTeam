import React, { Component } from 'react';
import logo from './logo.svg';

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
          <svg height="26px" width="125px" version="1.1" viewBox="0 0 125 26">
              <defs>
                  <path id="path-1" d="M17.3333333,19.08 L50.6666667,19.08"/>
                  <path id="path-3" d="M17.3333333,26.5 L50.6666667,26.5"/>
                  <path id="path-5" d="M17.3333333,33.92 L50.6666667,33.92"/>
                  <text id="text-7" fill="#FFFFFF" fontFamily="MavenPro-Medium, Maven Pro" fontSize="14">
                      <tspan x="85.2691107" y="30.41">MENU</tspan>
                  </text>
              </defs>
              <g id="desktop" fill="none" stroke="none" strokeWidth="1">
                  <g id="treningi-personalne" transform="translate(-80.000000, -57.000000)">
                      <g id="hamburger" transform="translate(68.000000, 43.242188)">
                          <g id="Line" strokeLinecap="square">
                              <path d="M17.3333333,19.08 L50.6666667,19.08" stroke="#FFFFFF"/>
                              <path d="M17.3333333,19.08 L50.6666667,19.08" stroke="#FFFFFF"/>
                          </g>
                          <g id="Line-Copy" strokeLinecap="square">
                              <path d="M17.3333333,26.5 L50.6666667,26.5" stroke="#FFFFFF"/>
                              <path d="M17.3333333,26.5 L50.6666667,26.5" stroke="#FFFFFF"/>
                          </g>
                          <g id="Line-Copy-2" strokeLinecap="square">
                              <path d="M17.3333333,33.92 L50.6666667,33.92" stroke="#FFFFFF"/>
                              <path d="M17.3333333,33.92 L50.6666667,33.92" stroke="#FFFFFF"/>
                          </g>
                          <g id="menu" fill="#FFFFFF" fillOpacity="1">
                              <text fill="#FFFFFF" fontFamily="MavenPro-Medium, Maven Pro" fontSize="14">
                                  <tspan x="85.2691107" y="30.41">MENU</tspan>
                              </text>
                              <text fill="#FFFFFF" fontFamily="MavenPro-Medium, Maven Pro" fontSize="14">
                                  <tspan x="85.2691107" y="30.41">MENU</tspan>
                              </text>
                          </g>
                      </g>
                  </g>
              </g>
            </svg>
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
