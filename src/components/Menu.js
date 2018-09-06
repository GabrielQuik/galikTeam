import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./Menu.css";

const menuList = [
  {
    id: "item__1",
    content: "start",
    link: "/"
  },
  {
    id: "item__2",
    content: "trening personalny",
    link: "/treningi-personalne"
  },
  {
    id: "item__3",
    content: "przygotowanie motoryczne",
    link: "/przygotowanie-motoryczne-sportowcow"
  },
  {
    id: "item__4",
    content: "o mnie",
    link: "/o-mnie"
  },
  {
    id: "item__5",
    content: "kontakt",
    link: "/kontakt"
  }
];

const Menu = router => (
  <Fragment>
    <div className="wrapper">
      
      <div className="wrapper__menu">
        {menuList.map(menuItem => (
          <div key={menuItem.id} className="menu__item">
            <Link to={menuItem.link} className="menu__item__link">
              {menuItem.content}
            </Link>
          </div>
        ))}
      </div>
      <a className="nav" onClick={router.history.goBack}>
        <svg viewBox="0 0 449.998 449.998" width="20px" height="20px">
          <g>
            <g>
              <polygon
                points="449.974,34.855 415.191,0 225.007,190.184 34.839,0 0.024,34.839 190.192,224.999     0.024,415.159 34.839,449.998 225.007,259.797 415.191,449.998 449.974,415.143 259.83,224.999   "
                fill="#FFFFFF"
              />
            </g>
          </g>
        </svg>
      </a>
    </div>
  </Fragment>
);

export default Menu;
