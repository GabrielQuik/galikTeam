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
                <p>
                Nazywam się Michał Galikowski i jestem czynnym lekkoatletą specjalizującym się w biegu na 400m przez płotki, trenerem przygotowania motorycznego sportowców oraz trenerem personalnym.
                <br/><br/>Mimo młodego wieku ze sportem związany jestem od ponad 10 lat. Pochodzę ze sportowej rodziny, dlatego trening i sport to nieodłączna część mojego życia której poświęcam każdy możliwy czas od najmłodszych lat.
                <br/><br/>Razem z swoim Ojcem i Trenerem - Markiem Galikowskim, absolwentem gdańskiej Akademii Wychowania Fizycznego,  trenerem lekkoatletyki I klasy tworzymy jedną z najskuteczniejszych ekip w Polsce zdobywając przez ostatnie lata sześciokrotnie złoty medal Mistrzostw Polski oraz osiągając wyniki w pierwszej dziesiątce na szczeblu Europejskim. Swoje sukcesy zawdzięczamy przede wszystkim ciężkiej i nieustannej pracy nad sobą.
                <br/><br/>Przez ostatnie lata będąc członkiem Kadry Polski poznałem metody treningowe wielu wybitnych Trenerów i cały czas jestem głodny wiedzy na temat TRENINGU.
                <br/><br/>Nie jesteśmy zwykłymi trenerami. Sport i trening to nasze życie. Doświadczenie trenerskie oraz zawodnicze to nasz największy atut.
                <br/><br/>TO MY. GALIKTEAM.
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

export default About