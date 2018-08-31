import React from 'react'
import { Link } from 'react-router-dom'

import LogoImage from '../../assets/images/GALIKteam - logo.png';

const Logo = () => (
  <Link className="logo__link" to="/">
    <img className="logo__link__image" src={LogoImage} />
  </Link>
)

export default Logo