import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../context';
import { ROUTE_ABOUT, ROUTE_CONTACT, ROUTE_MAIN } from '../../utils/constants';
import classes from './Menu.module.css';

const MENU_ITEMS = [
  { path: ROUTE_MAIN, label: 'Main', isAuth: false },
  { path: ROUTE_CONTACT, label: 'Contact', isAuth: true },
  { path: ROUTE_ABOUT, label: 'About', isAuth: false },
];

export const MenuCourse = () => {
  const { isAuth } = useContext(AppContext);
  return (
    <nav className={classes['menu-course']}>
      <ul>
        {MENU_ITEMS.filter(
          (item) => (item.isAuth && isAuth.length > 0) || !item.isAuth
        ).map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? [classes['active-link'], classes['link']].join(' ')
                  : classes['link']
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
