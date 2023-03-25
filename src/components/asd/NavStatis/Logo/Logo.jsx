import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../../images/logo/logo@2x.png';
import style from './Logo.module.css';
//-----------------------------------------------------------//
export default function Logo() {
  return (
    <NavLink className={style.logo} to="/">
      <img src={image} alt="logo" width="90" height="31" />
    </NavLink>
  );
}
