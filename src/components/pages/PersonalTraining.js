import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import "../../App.css";
import "../style/About.css";

import Image from "../../../assets/images/M67A6522_1.jpg";
import MenuHamburger from '../MenuHamburger';

const PersonalTraining = () => (
  <Fragment>
  <MenuHamburger />
    <div className="container">
      <div className="container__half">
        <img className="half__image" src={Image} />
        <div className="half__desc">
          <span className="half__desc__text">
            Treningi personalne dla każdego
          </span>
        </div>
      </div>
      <div className="container__half container__half__text container__half__text--non-transparent">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          expedita distinctio nulla non laborum exercitationem molestias quas,
          vitae culpa cum doloribus quidem! Odio, nihil nemo perspiciatis ex
          quod quibusdam impedit? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Culpa officia dolorum fugiat, aliquam maiores eaque
          placeat! Aliquam dignissimos doloribus illum, optio unde totam.
          Commodi, laudantium quam veritatis ex dolor in!
        </p>
        <div className="button">
          <a className="button__link" href="/kontakt">
            kontakt
          </a>
        </div>
      </div>
    </div>
  </Fragment>
);

export default PersonalTraining;
