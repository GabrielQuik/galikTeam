import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import Logo from '../../components/Logo.js';

import Image from "../../../assets/images/M67A6522_1.jpg";
import MenuHamburger from '../MenuHamburger';

const PersonalTraining = () => (
  <Fragment>
  
    <div className="container">
    <MenuHamburger />
    <Logo />
      <div className="half-size-item half-size-item__image">
        <img className="half-size-item__image" src={Image} />
        <div className="half-size-item__desc">
          <span className="half-size-item__text">
            Treningi personalne dla każdego
          </span>
          <div className="button half-size-item__button">
            <Link
              to='/'
              className="button__link"
            >
              Inne treningi
                </Link>
          </div>
        </div>
      </div>
      <div className="half-size-item half-size-item__text half-size-item__text--non-transparent">
        <div className="half-size-item__text__cutter">
        <div className="half-size-item__text__content__other_container">
          <div className="half-size-item__text__content half-size-item__text__content--justify">
            <p>
            Już teraz masz okazję trenować po mistrzowsku.
            
            <br/><br/>W ofercie treningi personalne dla każdego - młodszych, starszych, dla osób sprawnych jak i tych po różnych urazach. Możliwość również treningu biegowego.
            
            <br/><br/>Trening ukierunkowany może być na różne kwestie jednak nieuniknione jest dużo lepsze samopoczucie, lepsza kondycja i zwiększenie komfortu swojego życia.
            Podczas naszych zajęć bazujemy głównie na treningu siłowym, TRX (z ciężarem własnego ciała), treningu zdrowotnym oraz cross treningu.
            
            <br/><br/>Nie czekaj ani minuty dłużej i zrób coś W KOŃCU ze sobą, odezwij się i umów na pierwsze spotkanie!
        </p>
            <div className="button">
              <a className="button__link" href="/kontakt">
                kontakt
          </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default PersonalTraining;
