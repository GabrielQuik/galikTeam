import React from 'react'
import { Fragment } from 'react';
import { Link } from 'react-router-dom'

import '../../App.css';
import '../style/About.css'

import MenuHamburger from '../MenuHamburger';

import ContactImage from '../../../assets/images/M67A6552_1.jpg'

const Contact = () => (
  <Fragment>
    
    <div className="container">
    <MenuHamburger />
      <div className="container__half">
        <img className="full__image" src={ContactImage} />
        <div className="half__desc">
          <span className="half__desc__text half__desc__text--pages">
            Kontakt
          </span>
        </div>
      </div>
      <div className="container__half container__half__text container__half__text--non-transparent">
        <div className="container__half__text__cutter">
          <div className="container__half__text__content__other_container">
            <div className="container__half__text__content container__half__text__content--justify">
              <p>
                Chcesz wiedzieć więcej albo nawiązać z nami współpracę?
                          <br />Teraz właśnie TY masz okazję być Mistrzem.
                          <br /><br /><span className='container__half__text__content__bigger'>Odezwij się!</span>
              </p>
              <div className="buttons__container">
                <div className="button button--mini">
                  <a className="button__link button__link--mini" href="/kontakt">
                    Facebook
                  </a>
                </div>
                <div className="button button--mini">
                  <a className="button__link button__link--mini" href="/kontakt">
                    E-mail
                  </a>
                </div>
                <div className="button button--mini">
                  <a className="button__link button__link--mini" href="/kontakt">
                    Telefon
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>

);

export default Contact