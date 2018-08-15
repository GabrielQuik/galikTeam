import React from 'react'
import { Fragment } from 'react';
import { Link } from 'react-router-dom'

import '../../App.css';
import '../style/About.css'

import AboutImage from '../../../assets/images/M67A6384_1.jpg'

const About = () => (
    <Fragment>
        <div className="container">
            <div className="container__half">
                <img className="half__image" src={AboutImage} />
            </div>
            <div className="container__half container__half__text container__half__text--non-transparent">

            </div>
        </div>
    </Fragment>

);

export default About