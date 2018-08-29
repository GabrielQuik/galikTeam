import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import './js/index.js'

import leftContentImage from "../../../assets/images/M67A6522_1.jpg";
import rightContentImage from "../../../assets/images/M67A6522_2.jpg";
import MenuHamburger from '../MenuHamburger';

import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

import animations from '../items/animations.js';

const imageList = [
  {
    uid: 1,
    id: "half__1",
    src: leftContentImage,
    alt: "Treningi personalne dla każdego",
    link: "/treningi-personalne"
  },
  {
    uid: 2,
    id: "half__2",
    src: rightContentImage,
    alt: "Przygotowanie motoryczne sportowców",
    link: "/przygotowanie-motoryczne-sportowcow"
  }
];

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.dom = {};
  }
  componentDidMount() {
    this.dom.root = ReactDOM.findDOMNode(this)
    animations.halfImagesAnim(this.dom.root);
  }
  render() {
    return (
      <Fragment>
      <MenuHamburger />
      <div className="container">
        {imageList.map(imageData => (
          <div key={imageData.uid} className={"container__half " + imageData.id}>
            <img
              className="half__image"
              src={imageData.src}
              alt={imageData.alt}
              draggable="false"
            />
            <div className="half__desc">
              <span className="half__desc__text">{imageData.alt}</span>
              <div data-id={imageData.id} className="button half__desc__button">
                <Link
                  to={imageData.link}
                  className="button__link"
                  data-id={imageData.id}
                >
                  wybierz
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="toAbout">
        <Link to={"/o-mnie"}>
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
        </Link>
      </div>
    </Fragment>

    )
  }
}