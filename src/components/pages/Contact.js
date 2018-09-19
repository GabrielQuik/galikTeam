import React from 'react'
import { Fragment } from 'react';
import { Link } from 'react-router-dom'

import Logo from '../../components/Logo.js';

import MenuHamburger from '../MenuHamburger';

import ContactImage from '../../../assets/images/M67A6552_1.jpg'

const Contact = () => (
  <Fragment>
    
    <div className="container">
    <MenuHamburger />
    <Logo />
      <div className="half-size-item half-size-item__image">
        <img className="full__image" src={ContactImage} />
        <div className="half-size-item__desc">
          <span className="half-size-item__text half-size-item__text--pages">
            Kontakt
          </span>
        </div>
      </div>
      <div className="half-size-item half-size-item__text half-size-item__text--non-transparent">
        <div className="half-size-item__text__cutter">
          <div className="half-size-item__text__content__other_container">
            <div className="half-size-item__text__content half-size-item__text__content--justify">
              <p>
                Chcesz wiedzieć więcej albo nawiązać z nami współpracę?
                          <br />Teraz właśnie TY masz okazję być Mistrzem.
                          <br /><br /><span className='half-size-item__text__content__bigger'>Odezwij się!</span>
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
              <p>
                Chcesz wiedzieć więcej albo
                <br />nawiązać z nami współpracę?
                <br />Teraz właśnie TY
                <br />masz okazję być Mistrzem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>

);

export default Contact