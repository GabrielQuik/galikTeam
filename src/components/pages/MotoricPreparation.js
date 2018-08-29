import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import "../../App.css";
import "../style/About.css";

import Image from "../../../assets/images/M67A6522_2.jpg";
import MenuHamburger from '../MenuHamburger';

const MotoricPreparation = () => (
  <Fragment>
  <MenuHamburger />
    <div className="container">
      <div className="container__half container__half__text container__half__text--non-transparent">
        <p>
          Spicy jalapeno bacon ipsum dolor amet consequat magna cupidatat tongue
          bresaola t-bone. Pancetta commodo sirloin bacon sint. Dolor tempor ut
          pig dolore pork chop t-bone, ribeye brisket bresaola eiusmod in
          incididunt ipsum duis. Buffalo prosciutto shankle enim. Eu rump
          meatloaf, pork loin ex chicken short loin meatball est pancetta kevin
          fugiat eiusmod salami. Prosciutto ipsum flank tongue. Dolore sint
          burgdoggen, esse tenderloin ipsum short loin turducken spare ribs
          chuck occaecat. Kielbasa pastrami cow, aliquip lorem consectetur
          adipisicing ut. T-bone doner turducken, sunt sed lorem dolor nisi
          swine commodo chicken nulla id beef. Labore reprehenderit nostrud, ut
          fugiat quis sausage velit in beef est. Bacon kielbasa do tri-tip
          labore dolore. Tongue venison tenderloin aute occaecat fugiat turkey
          cupidatat officia buffalo reprehenderit in laborum. Tenderloin
          excepteur short ribs, jerky occaecat laborum adipisicing tail turkey
          chuck burgdoggen ground round bacon pastrami. Ham salami nostrud,
          capicola sausage in burgdoggen minim. Filet mignon rump excepteur,
          brisket jerky ut landjaeger corned beef pancetta tempor. Burgdoggen
          adipisicing turkey mollit porchetta picanha cupim exercitation short
          ribs ullamco strip steak. Does your lorem ipsum text long for
          something a little meatier? Give our generator a try… it’s tasty!
        </p>
        <div className="button">
          <a className="button__link" href="/kontakt">
            kontakt
          </a>
        </div>
      </div>
      <div className="container__half">
        <img className="half__image" src={Image} />
        <div className="half__desc">
          <span className="half__desc__text">
            Przygotowanie motoryczne sportowców
          </span>
        </div>
      </div>
    </div>
  </Fragment>
);

export default MotoricPreparation;
