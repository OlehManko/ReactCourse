import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTE_ABOUT, ROUTE_CONTACT, ROUTE_MAIN } from '../../utils/constants';
import classes from './Menu.module.css';

const MENU_ITEMS = [
  { path: ROUTE_MAIN, label: 'Main' },
  { path: ROUTE_CONTACT, label: 'Contact' },
  { path: ROUTE_ABOUT, label: 'About' },
];

export const MenuCourse = () => {
  return (
    <nav className={classes['menu-course']}>
      <ul>
        {MENU_ITEMS.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? classes['active-link'] : ''
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
