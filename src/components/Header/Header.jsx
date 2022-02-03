import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { MenuCourse } from '../Menu/Menu';
import styles from './Header.module.css';

export const HeaderCourse = () => {
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    document.body.setAttribute('data-theme', theme);
  };

  useEffect(changeTheme, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <header className={styles.headercrs}>
      <MenuCourse />
      {/* <NavLink to={'/'}>Main</NavLink>
      <NavLink to={'/contact'}>Contact</NavLink>
      <NavLink to={'/about'}>About</NavLink> */}
      {theme === 'light' ? (
        <MdDarkMode size={'2rem'} onClick={toggleTheme} />
      ) : (
        <MdLightMode size={'2rem'} onClick={toggleTheme} />
      )}
    </header>
  );
};
