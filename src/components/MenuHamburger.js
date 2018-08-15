import React from 'react'

const MenuHamburger = () => (
  <a className="nav" href="#menu">
    <svg height="16px" width="27px" version="1.1" viewBox="0 0 27 16">
      <defs />
      <g
        id="Symbols"
        fill="none"
        stroke="none"
        strokeLinecap="square"
        strokeWidth="1"
      >
        <g
          id="hamburger"
          stroke="#FFFFFF"
          strokeWidth="2"
          transform="translate(-12.000000, -17.000000)"
        >
          <path id="Line" d="M13,18 L38,18" />
          <path id="Line-Copy" d="M13,25 L38,25" />
          <path id="Line-Copy-2" d="M13,32 L38,32" />
        </g>
      </g>
    </svg>
    <span id="menu_text">menu</span>
  </a>
)

export default MenuHamburger