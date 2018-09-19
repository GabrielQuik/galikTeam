import React from 'react'
import { Link } from 'react-router-dom'

import LogoImage from '../../assets/images/GALIKteam - logo.png';

const Logo = () => (
  <Link className="logo" to="/">
    <img className="logo__image" src={LogoImage} />
  </Link>
)

export default Logo