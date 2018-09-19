import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import Logo from '../../components/Logo.js';

import Image from "../../../assets/images/M67A6522_2.jpg";
import MenuHamburger from '../MenuHamburger';

const MotoricPreparation = () => (
  <Fragment>
  
    <div className="container">
    <MenuHamburger />
    <Logo />
      <div className="half-size-item half-size-item__text half-size-item__text--non-transparent">
        <div className="half-size-item__text__cutter half-size-item__text__cutter--left">
          <div className="half-size-item__text__content__other_container">
            <div className="half-size-item__text__content half-size-item__text__content--justify">
              <p>
                Specjalizujemy się przede wszystkim w dostarczaniu usług związanych z treningiem motorycznym w sportach drużynowych oraz indywidualnych.
              <br /><br />Robimy wszystko, aby nasi Zawodnicy dzięki naszym treningom potrafili wykorzystać swój maksymalny potencjał oferując im profesjonalną, kompleksową opiekę trenerską. Naszym marzeniem jest przekraczanie każdych możliwych granic i poprawne kierowanie sportowcami różnorakich dyscyplin.
              <br /><br />Rozwój to proces który nie ma końca - zawsze znajdzie się rzecz nad którą można i trzeba popracować.
              <br /><br />Chcesz zwiększyć swoją wytrzymałość, szybkość lub siłę? Chcesz poprawić swoją sprawność i być lepiej ukształtowanym sportowcem mniej podatnym na kontuzje? Chcesz wznieść się na wyżyny swoich umiejętności?
              <br /><br />Zrób w końcu krok w przód i SIĘGNIJ PO SWOJE - zapracuj z naszą pomocą na swoją historię.
            </p>
              <div className="button button--align_right">
                <a className="button__link" href="/kontakt">
                  kontakt
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="half-size-item half-size-item__image">
        <img className="half-size-item__image" src={Image} />
        <div className="half-size-item__desc">
          <span className="half-size-item__title">
            Przygotowanie motoryczne sportowców
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
    </div>
  </Fragment>
);

export default MotoricPreparation;
